export default class ChartPosition {
    constructor({ horizonDegrees, eclipticDegrees }?: {
        horizonDegrees?: number | undefined;
        eclipticDegrees?: number | undefined;
    });
    Horizon: {
        DecimalDegrees: number;
        ArcDegrees: {
            degrees: number;
            minutes: number;
            seconds: number;
        };
        ArcDegreesFormatted: string;
        ArcDegreesFormatted30: string;
    };
    Ecliptic: {
        DecimalDegrees: number;
        ArcDegrees: {
            degrees: number;
            minutes: number;
            seconds: number;
        };
        ArcDegreesFormatted: string;
        ArcDegreesFormatted30: string;
    };
}
