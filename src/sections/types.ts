export interface PudSection {
    readonly data: ArrayBuffer;
    readonly name: string;
    readonly length: number;
}

export const HEADER_LENGTH = 8;

export class SectionCreationOverflowError extends Error {
    constructor(
        message = "Not enought bytes to create a section at provided offset",
        options?: ErrorOptions,
    ) {
        super(message, options);
    }
}

export class SectionCreationError extends Error {
    constructor(
        message = "Invalid header value for section.",
        options?: ErrorOptions,
    ) {
        super(message, options);
    }
}
