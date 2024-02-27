import { useState } from 'react';

import Button from '@mui/material/Button';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

import Modal from 'components/Modal';
import LineChart from 'components/Charts/Line';
import AreaChart from 'components/Charts/Area';

import { FIELD_SUBTYPES } from 'services/api.types';
import { ChartCellProps } from './chartCell.types';

const ChartCell = ({ value, fieldDefinition }: ChartCellProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { subType } = fieldDefinition;

    return (
        <div onClick={e => e.stopPropagation()}>
            <Button
                variant="contained"
                endIcon={<StackedLineChartIcon />}
                onClick={() => setIsOpen(true)}
            >
                Chart
            </Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={fieldDefinition.name}
            >
                {subType === FIELD_SUBTYPES.line ? (
                    <LineChart
                        data={value as { label: string; value: string }[]}
                    />
                ) : (
                    <AreaChart
                        data={value as { label: string; value: string[] }[]}
                    />
                )}
            </Modal>
        </div>
    );
};

export default ChartCell;
