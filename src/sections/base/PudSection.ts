import { err, ok, Result } from "neverthrow";
import { NumericTypedArray, TypedArrayConstructor } from "./types";
import { HEADER_LENGTH } from "../types";

/**
 * Base class that's a blueprint for section sub-classes
 */
export class PudSection {
    protected _view: DataView;
    protected _data: ArrayBuffer;

    /**
     *
     * @param dataLength length of section's data
     * @param name Four letter ASCII string for identification
     */
    protected constructor(dataLength: number, name = "ERR ") {
        this._data = new ArrayBuffer(HEADER_LENGTH + dataLength);
        this._view = new DataView(this._data);

        this.writeString(0, name, 4);
        this.dataLength = dataLength;
    }

    protected rebind(data: ArrayBuffer) {
        this._data = data;
        this._view = new DataView(this._data);
    }

    /** Length of section's data (without header length) */
    public get dataLength() {
        return this._view.getUint32(4, true);
    }

    protected set dataLength(value: number) {
        this._view.setUint32(4, value, true);
    }

    /** Length of entire section (with header length) */
    public get totalLength() {
        return HEADER_LENGTH + this.dataLength;
    }

    /** Entire internal bytes of section */
    public get data() {
        return this._data;
    }

    /**
     * Called before exporting the section to binary.
     * Dynamic sections can use this to clamp their data and remove deleted elements.
     */
    public prepareForExport(): void {
        // Do nothing by default
    }

    public get name() {
        return this.readString(0, 4)._unsafeUnwrap();
    }

    protected readString(offset: number, length: number) {
        return PudSection.readString(this._data, offset, length);
    }

    /**
     *
     * @param offset
     * @param text
     * @param maxLength
     */
    protected writeString(offset: number, text: string, maxLength: number) {
        return PudSection.writeString(this._view, offset, text, maxLength);
    }

    protected getTypedArraySlice<T extends NumericTypedArray>(
        offset: number,
        length: number,
        Type: TypedArrayConstructor<T>,
    ): Result<T, Error> {
        try {
            return ok(new Type(this._data, offset, length) as T);
        } catch (error) {
            if (
                offset + length * Type.BYTES_PER_ELEMENT >
                this._data.byteLength
            ) {
                return err(
                    new Error(
                        `Array with size of ${length * Type.BYTES_PER_ELEMENT} at provided offset (${offset}) overflows internal data (${this._data.byteLength}).`,
                    ),
                );
            }

            return err(error as Error);
        }
    }

    /************************************
     *                                  *
     *          STATIC MEMBERS          *
     *                                  *
     ************************************/

    /** Creates section from bytes, provided buffer will be used inside  */
    protected static fromSectionBytes(bytes: ArrayBuffer) {
        try {
            const view = new DataView(bytes);

            const section = new PudSection(view.getUint32(4, true));

            section._data = bytes;
            section._view = view;

            return ok(section);
        } catch (error) {
            return err(error);
        }
    }

    protected static readString(
        data: ArrayBuffer,
        offset: number,
        length: number,
    ): Result<string, Error> {
        try {
            const bytes = new Uint8Array(data.slice(offset, offset + length));

            const firstNull = bytes.indexOf(0);
            const actualBytes =
                firstNull === -1 ? bytes : bytes.subarray(0, firstNull);

            return ok(String.fromCharCode(...actualBytes));
        } catch (error) {
            return err(error as Error);
        }
    }

    protected static writeString(
        dataView: DataView,
        offset: number,
        text: string,
        maxLength: number,
    ): Result<undefined, Error> {
        try {
            const encoder = new TextEncoder();
            const bytes = encoder.encode(text);

            const length = Math.min(bytes.length, maxLength);

            for (let i = 0; i < length; i++) {
                dataView.setUint8(offset + i, bytes[i]);
            }

            for (let i = length; i < maxLength; i++) {
                dataView.setUint8(offset + i, 0);
            }

            return ok(undefined);
        } catch (error) {
            return err(error as Error);
        }
    }
}
