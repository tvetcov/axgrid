import {
    CartesianGrid,
    Legend,
    Line,
    LineChart as ReLineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

import Box from '@mui/material/Box';

const LineChart = ({
    data
}: {
    data: { label: string; value: string | number }[];
}) => {
    return (
        <Box sx={{ width: '100%', height: '30vh' }}>
            <ResponsiveContainer width="100%" height="100%">
                <div data-testid="line-chart">
                    <ReLineChart width={500} height={300} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="label"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#82ca9d"
                        />
                    </ReLineChart>
                </div>
            </ResponsiveContainer>
        </Box>
    );
};

export default LineChart;
