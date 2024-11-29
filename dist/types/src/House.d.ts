export default class House {
    static convertIdToKey(id: any): string;
    constructor({ ascendantDegrees, eclipticDegreesStart, eclipticDegreesEnd, id, zodiac, language }?: {
        ascendantDegrees?: number | undefined;
        eclipticDegreesStart?: number | undefined;
        eclipticDegreesEnd?: number | undefined;
        id?: number | undefined;
        zodiac?: string | undefined;
        language?: string | undefined;
    });
    _language: string;
    id: number;
    label: any;
    ChartPosition: {
        StartPosition: ChartPosition;
        EndPosition: ChartPosition;
    };
    Sign: any;
}
import ChartPosition from './ChartPosition';
