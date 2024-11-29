export default Sign;
declare class Sign {
    static Astronomical(language: any): Sign[];
    static Sidereal(language: any): Sign[];
    static Tropical(language: any): Sign[];
    static OfType(zodiac: any, language?: string): Sign[] | undefined;
    constructor({ key, zodiac, language }?: {
        key?: string | undefined;
        zodiac?: string | undefined;
        language?: string | undefined;
    });
    key: string;
    zodiac: any;
    label: any;
    get StartDate(): any;
    get EndDate(): any;
    get ZodiacStart(): number;
    get ZodiacEnd(): number;
}
