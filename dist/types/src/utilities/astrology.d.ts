export function getSignFromDD(decimalDegrees: any): any;
export function getHouseFromDD(houses: any, decimalDegrees: any): any;
export function constructHouses(cuspsArray: any, ascendantDegrees: any, zodiac: any, language?: string): any;
export function applyZodiacOffsetClockwise(tropicalZodiacLongitude: any, zodiac: any): number | undefined;
export function zodiacPositionToHorizon(ascendantZodiacDegrees: any, zodiacDegrees: any): number;
export function applyZodiacOffsetCounter(tropicalZodiacLongitude: any, zodiac: any): number | undefined;
export function getZodiacSign({ decimalDegrees, zodiac, language }?: {
    decimalDegrees?: number | undefined;
    zodiac?: string | undefined;
    language?: string | undefined;
}): any;
export function calculateKochHouseCusps({ rightAscensionMC, midheaven, ascendant, latitude, obliquityEcliptic, }?: {
    rightAscensionMC?: number | undefined;
    midheaven?: number | undefined;
    ascendant?: number | undefined;
    latitude?: number | undefined;
    obliquityEcliptic?: number | undefined;
}): string[];
export function calculatePlacidianHouseCusps({ rightAscensionMC, midheaven, ascendant, latitude, obliquityEcliptic, }?: {
    rightAscensionMC?: number | undefined;
    midheaven?: number | undefined;
    ascendant?: number | undefined;
    latitude?: number | undefined;
    obliquityEcliptic?: number | undefined;
}): any[];
export function calculateRegiomontanusHouseCusps({ rightAscensionMC, midheaven, ascendant, latitude, obliquityEcliptic, }?: {
    rightAscensionMC?: number | undefined;
    midheaven?: number | undefined;
    ascendant?: number | undefined;
    latitude?: number | undefined;
    obliquityEcliptic?: number | undefined;
}): any[];
export function calculateTopocentricHouseCusps({ rightAscensionMC, midheaven, ascendant, latitude, obliquityEcliptic, }?: {
    rightAscensionMC?: number | undefined;
    midheaven?: number | undefined;
    ascendant?: number | undefined;
    latitude?: number | undefined;
    obliquityEcliptic?: number | undefined;
}): any[];
export function calculateEqualHouseCusps({ ascendant, zodiac }?: {
    ascendant?: number | undefined;
    zodiac?: string | undefined;
}): number[];
export function calculateWholeSignHouseCusps({ ascendant, zodiac }?: {
    ascendant?: number | undefined;
    zodiac?: string | undefined;
}): number[];
export function calculateCampanusHouseCusps({ rightAscensionMC, midheaven, ascendant, latitude, obliquityEcliptic, }?: {
    rightAscensionMC?: number | undefined;
    midheaven?: number | undefined;
    ascendant?: number | undefined;
    latitude?: number | undefined;
    obliquityEcliptic?: number | undefined;
}): string[];
