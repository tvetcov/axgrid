import { useState } from 'react';

import Button from '@mui/material/Button';

import Modal from 'components/Modal';
import { ChartCellProps } from './chartCell.types.ts';

const ChartCell = (props: ChartCellProps) => {
    const { value, fieldDefinition } = props;
    const [isOpen, setIsOpen] = useState(false);

    console.log(value);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Chart</Button>
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
