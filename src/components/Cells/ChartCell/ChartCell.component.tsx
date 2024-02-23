import { useState } from 'react';

import Button from '@mui/material/Button';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

import Modal from 'components/Modal';
import { ChartCellProps } from './chartCell.types';

const ChartCell = (props: ChartCellProps) => {
    const { value, fieldDefinition } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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
                <div>Chart goes here</div>
            </Modal>
        </>
    );
};

export default ChartCell;
