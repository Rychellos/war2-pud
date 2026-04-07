import { err, ok } from "neverthrow";
import {
    HEADER_LENGTH,
    SectionCreationError,
    SectionCreationOverflowError,
} from "../types";
import { PudSection } from "./PudSection";
import { NumericTypedArray, TypedArrayConstructor } from "./types";

export class PudStaticSection extends PudSection {
    protected constructor(
        name: string,
        dataLength: number,
        data: ArrayBuffer,
    ) {
        super(dataLength, name);
        // Use rebind to avoid double allocation where possible, 
        // though super() already allocated. But we need to use the provided buffer.
        this.rebind(data);

        // When rebinding, we must ensure the header is written to the NEW buffer
        this.writeString(0, name, 4);
        this.dataLength = dataLength;
    }

    public get view() {
        return this._view;
    }

    public getBytes() {
        return this._data;
    }

    protected static fromBytesInternal<T extends PudStaticSection>(
        sectionName: string,
        sectionLength: number,
        Constructor: new (data: ArrayBuffer) => T,
        bytes: Uint8Array,
        offset = 0,
    ) {
        const view = new DataView(bytes.buffer, offset);

        const headerLength = view.getUint32(4, true);

        if (HEADER_LENGTH + offset + headerLength > bytes.byteLength) {
            return err(new SectionCreationOverflowError());
        }

        const allocationLength = Math.max(headerLength, sectionLength);
        const buffer = new ArrayBuffer(HEADER_LENGTH + allocationLength);
        const targetView = new Uint8Array(buffer);

        targetView.set(
            bytes.subarray(offset, offset + HEADER_LENGTH + headerLength),
        );

        if (allocationLength > headerLength) {
            new DataView(buffer).setUint32(4, allocationLength, true);
        }

        const section = new Constructor(buffer);

        if (section.view.getUint8(0) === 0) {
            section.writeString(0, sectionName, 4);
        }

        const valid = section.validate();

        if (valid.isErr()) {
            return err(valid.error);
        }

        return ok(section as T);
    }

    protected validate() {
        // Use readString from base class safely
        const readNameResult = this.readString(0, 4);
        if (readNameResult.isErr() || readNameResult._unsafeUnwrap() !== this.name) {
            return err(new SectionCreationError());
        }

        return ok(undefined);
    }

    // Keep getString as a wrapper for backward compatibility with child classes
    protected getString(offset: number, length: number): string {
        const result = this.readString(offset, length);
        if (result.isErr()) return "";
        return result._unsafeUnwrap();
    }

    protected getArray<T extends NumericTypedArray>(
        offset: number,
        length: number,
        Type: TypedArrayConstructor<T>,
    ): T {
        const result = this.getTypedArraySlice(offset, length, Type);
        if (result.isOk()) {
            return result._unsafeUnwrap();
        }

        try {
            return new Type(this._data.slice(offset, offset + length * Type.BYTES_PER_ELEMENT), 0, length) as T;
        } catch {
            return new Type(0) as T;
        }
    }
}
