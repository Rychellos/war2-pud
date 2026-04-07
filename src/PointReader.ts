export class Uint16PointReader {
    private view: DataView;

    constructor(
        readonly data: ArrayBuffer,
        private offset: number,
    ) {
        this.view = new DataView(data, offset, 4);
    }

    get x() {
        return this.view.getUint16(0, true);
    }

    set x(value: number) {
        this.view.setUint16(0, value, true);
    }

    get y() {
        return this.view.getUint16(2, true);
    }

    set y(value: number) {
        this.view.setUint16(2, value, true);
    }
}
