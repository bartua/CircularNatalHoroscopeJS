/**
  @constant
  @type {object}
  default orbs from https://astro-charts.com/blog/2018/how-customize-orbs-your-charts/
*/
export const ASPECTS: object;
export namespace BODIES {
    namespace sun {
        let label: string;
    }
    namespace moon {
        let label_1: string;
        export { label_1 as label };
    }
    namespace mercury {
        let label_2: string;
        export { label_2 as label };
    }
    namespace venus {
        let label_3: string;
        export { label_3 as label };
    }
    namespace mars {
        let label_4: string;
        export { label_4 as label };
    }
    namespace jupiter {
        let label_5: string;
        export { label_5 as label };
    }
    namespace saturn {
        let label_6: string;
        export { label_6 as label };
    }
    namespace uranus {
        let label_7: string;
        export { label_7 as label };
    }
    namespace neptune {
        let label_8: string;
        export { label_8 as label };
    }
    namespace pluto {
        let label_9: string;
        export { label_9 as label };
    }
    namespace chiron {
        let label_10: string;
        export { label_10 as label };
    }
    namespace sirius {
        let label_11: string;
        export { label_11 as label };
    }
}
export namespace POINTS {
    namespace northnode {
        let label_12: string;
        export { label_12 as label };
    }
    namespace southnode {
        let label_13: string;
        export { label_13 as label };
    }
    namespace lilith {
        let label_14: string;
        export { label_14 as label };
    }
}
export namespace ANGLES {
    namespace ascendant {
        let label_15: string;
        export { label_15 as label };
    }
    namespace midheaven {
        let label_16: string;
        export { label_16 as label };
    }
}
export const HOUSES: {
    '1': {
        label: string;
    };
};
export const SIGNS: ({
    key: string;
    startDate: {
        tropical: moment.Moment;
        sidereal: moment.Moment;
        astronomical: moment.Moment;
    };
    endDate: {
        tropical: moment.Moment;
        sidereal: moment.Moment;
        astronomical: moment.Moment;
    };
    zodiacStart: number;
    zodiacEnd: number;
} | {
    key: string;
    startDate: {
        astronomical: moment.Moment;
        tropical?: undefined;
        sidereal?: undefined;
    };
    endDate: {
        astronomical: moment.Moment;
        tropical?: undefined;
        sidereal?: undefined;
    };
    zodiacStart: number;
    zodiacEnd: number;
})[];
import moment from 'moment';
