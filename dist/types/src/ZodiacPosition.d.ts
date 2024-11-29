export default ZodiacPosition;
declare class ZodiacPosition {
    constructor({ decimalDegrees, zodiac }?: {
        decimalDegrees?: number | undefined;
        zodiac?: string | undefined;
    });
    Sign: any;
}
