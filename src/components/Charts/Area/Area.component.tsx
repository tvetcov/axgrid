import {
    Area,
    AreaChart as ReAreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    TooltipProps,
    XAxis,
    YAxis
} from 'recharts';

import Box from '@mui/material/Box';

import TooltipContent from './components/Tooltip';
import { transformData, toTime } from './area.utils';

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
                    <Tooltip
                        content={(metaData: TooltipProps<string, number>) => {
                            return <TooltipContent metaData={metaData} />;
                        }}
                    />
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
