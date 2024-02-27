import { differenceInMinutes, parse } from 'date-fns';

export const toTime = (decimal: number) => {
    return `${decimal * 24}:00`;
};

export const toPercent = (decimal: number) => {
    return `${(decimal * 100).toFixed(2)}%`;
};

export const MINUTES_IN_ONE_DAY = 1440;

export const TIME_FORMAT = 'HH:mm:ss';

export const transformData = (data: { label: string; value: string[] }[]) => {
    return data.map(item => {
        const dayStart = parse(item.value[0], TIME_FORMAT, new Date());
        const dayEnd = parse(item.value[1], TIME_FORMAT, new Date());
        const midnight = parse('00:00:00', TIME_FORMAT, new Date());
        const nextDay = parse('23:59:59', TIME_FORMAT, new Date());

        const daystartDiff = differenceInMinutes(dayStart, midnight);
        const dayEndDiff = differenceInMinutes(nextDay, dayEnd);

        return {
            label: item.label,
            ['Sunrise']: (daystartDiff / MINUTES_IN_ONE_DAY).toFixed(2),
            ['Day']: (
                (differenceInMinutes(dayEnd, dayStart) - 1) /
                MINUTES_IN_ONE_DAY
            ).toFixed(2),
            ['Sunset']: (dayEndDiff / MINUTES_IN_ONE_DAY).toFixed(2)
        };
    });
};
