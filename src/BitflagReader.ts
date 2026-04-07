export class BitFlagReader {
    protected view: DataView;

    protected constructor(
        readonly data: ArrayBuffer,
        readonly length: number,
        readonly offset = 0,
    ) {
        this.view = new DataView(this.data);
    }

    public getFlag(bitIndex: number) {
        const byteIndex = Math.floor(bitIndex / 8);

        if (
            byteIndex + this.offset >= this.data.byteLength ||
            byteIndex >= this.length
        ) {
            throw new Error("Tried to read bit flag outside of the data array");
        }

        return Boolean(
            (this.view.getUint8(this.offset + byteIndex) >> (bitIndex & 7)) & 1,
        );
    }

    public setFlag(bitIndex: number, value: boolean) {
        const byteIndex = Math.floor(bitIndex / 8);
        const bit = bitIndex & 7;

        if (
            byteIndex + this.offset >= this.data.byteLength ||
            byteIndex >= this.length
        ) {
            throw new Error(
                "Tried to write bit flag outside of the data array",
            );
        }

        const current = this.view.getUint8(this.offset + byteIndex);

        const newValue = value ? current | (1 << bit) : current & ~(1 << bit);

        this.view.setUint8(this.offset + byteIndex, newValue);
    }
}
