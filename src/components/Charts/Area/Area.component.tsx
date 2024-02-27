import {
    Area,
    AreaChart as ReAreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    TooltipProps
} from 'recharts';
import { differenceInMinutes, parse } from 'date-fns';

import Box from '@mui/material/Box';

const toTime = (decimal: number) => {
    return `${decimal * 24}:00`;
};

const toPercent = (decimal: number) => {
    return `${(decimal * 100).toFixed(2)}%`;
};

const A_DAY_IN_MINUTES = 1440;

const transformData = (data: { label: string; value: string[] }[]) => {
    return data.map(item => {
        const dayStart = parse(item.value[0], 'HH:mm:ss', new Date());
        const dayEnd = parse(item.value[1], 'HH:mm:ss', new Date());
        const midnight = parse('00:00:00', 'HH:mm:ss', new Date());
        const nextDay = parse('23:59:59', 'HH:mm:ss', new Date());

        const daystartDiff = differenceInMinutes(dayStart, midnight);
        const dayEndDiff = differenceInMinutes(nextDay, dayEnd);

        return {
            label: item.label,
            ['Sunrise']: (daystartDiff / A_DAY_IN_MINUTES).toFixed(2),
            ['Day']: (
                (differenceInMinutes(dayEnd, dayStart) - 1) /
                A_DAY_IN_MINUTES
            ).toFixed(2),
            ['Sunset']: (dayEndDiff / A_DAY_IN_MINUTES).toFixed(2)
        };
    });
};

const renderTooltipContent = (metaData: TooltipProps<string, number>) => {
    return (
        <div className="customized-tooltip-content">
            <ul className="list">
                {metaData?.payload?.map((entry, index) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                        {`${entry.name}: ${toPercent(Number(entry.value))}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const AreaChart = ({
    data
}: {
    data: { label: string; value: string[] }[];
}) => {
    const transformedData = transformData(data);

    return (
        <Box sx={{ width: '100%', height: '30vh' }}>
            <ResponsiveContainer width="100%" height="100%">
                <ReAreaChart
                    width={500}
                    height={400}
                    data={transformedData}
                    stackOffset="expand"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={renderTooltipContent} />
                    <XAxis dataKey="label" />
                    <YAxis tickFormatter={toTime} />
                    <Area
                        type="monotone"
                        dataKey="Sunrise"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="Day"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="Sunset"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                </ReAreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default AreaChart;
