import { useMemo } from 'react';

import Chip from '@mui/material/Chip';

import { ORDER_STATUS } from 'services/api.types.ts';
import statusCellStyles from './statusCell.styles.ts';

const StatusCell = ({ status }: { status: ORDER_STATUS }) => {
    const chipColor = useMemo(() => {
        switch (status) {
            case ORDER_STATUS.Open:
                return 'primary';
            case ORDER_STATUS.Rejected:
                return 'error';
            case ORDER_STATUS.Accepted:
                return 'success';
            case ORDER_STATUS.Pending:
                return 'warning';
            default:
                return 'default';
        }
    }, [status]);

    const pendingAnimationStyles =
        status === ORDER_STATUS.Pending ? statusCellStyles : null;

    return (
        <Chip sx={pendingAnimationStyles} color={chipColor} label={status} />
    );
};

export default StatusCell;
