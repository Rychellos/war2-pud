import { HEADER_LENGTH } from "../types";
import { PudSection } from "./PudSection";

export class PudDynamicSectionEntry {
    protected _view: DataView;
    public deleted = false;

    protected constructor(
        data: ArrayBuffer,
        offset: number,
        byteLength: number,
    ) {
        this._view = new DataView(data, offset, byteLength);
    }

    _rebind(newData: ArrayBuffer, offset: number, byteLength: number) {
        this._view = new DataView(newData, offset, byteLength);
    }
}

export class PudDynamicSection<
    T extends PudDynamicSectionEntry,
    V extends (new (
        data: ArrayBuffer,
        offset: number,
        byteLength: number,
    ) => T) & {
        LENGTH: number;
    },
> extends PudSection {
    protected elements: T[] = [];
    private freedIndexes: number[] = [];
    private maxElement = 0;
    private elementToIdMap = new Map<T, number>();

    protected constructor(
        protected entryConstructor: V,
        startingElements = 0,
        name = "ERR ",
    ) {
        super(entryConstructor.LENGTH * startingElements, name);

        this.maxElement = startingElements;

        for (let i = 0; i < startingElements; i++) {
            this.elements[i] = new this.entryConstructor(
                this._data,
                HEADER_LENGTH + i * this.entryConstructor.LENGTH,
                this.entryConstructor.LENGTH,
            );

            this.elementToIdMap.set(this.elements[i], i);
        }
    }

    protected addElement(): T {
        if (this.freedIndexes.length) {
            const index = this.freedIndexes.shift()!;
            const el = this.elements[index];
            el.deleted = false;
            return el;
        }

        const oldMaxElement = this.maxElement;
        this.maxElement = this.maxElement === 0 ? 1 : this.maxElement * 2;

        const newDataLength = this.maxElement * this.entryConstructor.LENGTH;
        const newBufferSize = HEADER_LENGTH + newDataLength;

        this._data = this._transfer(this._data, newBufferSize);
        this._view = new DataView(this._data);
        this.dataLength = newDataLength;

        for (let i = 0; i < oldMaxElement; i++) {
            if (this.elements[i]) {
                this.elements[i]._rebind(
                    this._data,
                    HEADER_LENGTH + i * this.entryConstructor.LENGTH,
                    this.entryConstructor.LENGTH,
                );
            }
        }

        let firstElement: T | undefined = undefined;

        for (let i = oldMaxElement; i < this.maxElement; i++) {
            this.elements[i] = new this.entryConstructor(
                this._data,
                HEADER_LENGTH + i * this.entryConstructor.LENGTH,
                this.entryConstructor.LENGTH,
            );

            this.elementToIdMap.set(this.elements[i], i);

            if (firstElement === undefined) {
                firstElement = this.elements[i];
                firstElement.deleted = false;
            } else {
                this.elements[i].deleted = true;
                this.freedIndexes.push(i);
            }
        }

        return firstElement as T;
    }

    public override prepareForExport(): void {
        this.clampData();
    }

    protected removeElement(element: T): boolean {
        const index = this.elements.indexOf(element);

        if (index === -1 || element.deleted) {
            return false;
        }

        element.deleted = true;
        this.freedIndexes.push(index);

        return true;
    }

    protected getElementId(element: T) {
        return this.elementToIdMap.get(element);
    }

    clampData(): void {
        if (this.freedIndexes.length === 0) {
            return;
        }

        const entryLen = this.entryConstructor.LENGTH;
        const u8 = new Uint8Array(this._data);

        let writeIndex = 0;
        const compactedElements: T[] = [];

        for (let readIndex = 0; readIndex < this.elements.length; readIndex++) {
            const el = this.elements[readIndex];

            if (!el.deleted) {
                if (writeIndex !== readIndex) {
                    const readOffset = HEADER_LENGTH + readIndex * entryLen;
                    const writeOffset = HEADER_LENGTH + writeIndex * entryLen;

                    u8.copyWithin(
                        writeOffset,
                        readOffset,
                        readOffset + entryLen,
                    );
                }

                compactedElements.push(el);
                writeIndex++;
            }
        }

        this.elements = compactedElements;
        this.freedIndexes = [];
        this.maxElement = this.elements.length;
        this.elementToIdMap.clear();

        const newDataLength = this.maxElement * entryLen;
        const newBufferSize = HEADER_LENGTH + newDataLength;

        this._data = this._transfer(this._data, newBufferSize);
        this._view = new DataView(this._data);
        this.dataLength = newDataLength;

        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i]._rebind(
                this._data,
                HEADER_LENGTH + i * entryLen,
                entryLen,
            );

            this.elementToIdMap.set(this.elements[i], i);
        }
    }

    private _transfer(buffer: ArrayBuffer, newByteLength: number): ArrayBuffer {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((buffer as any).transfer) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (buffer as any).transfer(newByteLength);
        }

        const newBuffer = new ArrayBuffer(newByteLength);
        new Uint8Array(newBuffer).set(
            new Uint8Array(buffer).subarray(
                0,
                Math.min(buffer.byteLength, newByteLength),
            ),
        );
        return newBuffer;
    }
}
