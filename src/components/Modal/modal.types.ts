import { ReactNode } from 'react';
import { SxProps } from '@mui/material';

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    title: string;
    onClose: () => void;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    hideActions?: boolean;
    sx?: SxProps;
}
