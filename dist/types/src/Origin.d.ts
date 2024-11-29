export class Origin {
    constructor({ year, month, date, hour, minute, second, latitude, longitude }?: {
        year?: number | undefined;
        month?: number | undefined;
        date?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
        second?: number | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
    });
    year: any;
    month: any;
    date: any;
    hour: any;
    minute: any;
    latitude: number;
    longitude: number;
    timeObject: {
        year: number;
        month: number;
        date: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    };
    timezone: moment.MomentZone | null;
    localTime: moment.Moment;
    localTimeFormatted: string;
    utcTime: moment.Moment;
    utcTimeFormatted: string;
    julianDate: number;
    localSiderealTime: number;
}
export default Origin;
import moment from 'moment-timezone';
