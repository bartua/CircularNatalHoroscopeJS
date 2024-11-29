export function getObliquityEcliptic(): void;
export function getJulianDate({ year, month, date, ut, }?: {
    year?: number | undefined;
    month?: number | undefined;
    date?: number | undefined;
    ut?: number | undefined;
}): number;
export function getLocalSiderealTime({ jd, longitude }?: {
    jd?: number | undefined;
    longitude?: number | undefined;
}): number;
export function getMidheavenSun({ localSiderealTime, obliquityEcliptic }?: {
    localSiderealTime?: number | undefined;
    obliquityEcliptic?: number | undefined;
}): number;
export function getAscendant({ latitude, obliquityEcliptic, localSiderealTime }?: {
    latitude?: number | undefined;
    obliquityEcliptic?: number | undefined;
    localSiderealTime?: number | undefined;
}): number;
