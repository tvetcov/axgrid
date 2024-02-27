import { TooltipProps } from 'recharts';

import Box from '@mui/material/Box';

import { toPercent } from 'components/Charts/Area/area.utils';
import tooltipStyles from './tooltip.styles';

const Tooltip = ({ metaData }: { metaData: TooltipProps<string, number> }) => {
    return (
        <Box sx={tooltipStyles}>
            <ul>
                {metaData?.payload?.map((entry, index) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                        {`${entry.name}: ${toPercent(Number(entry.value))}`}
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default Tooltip;
