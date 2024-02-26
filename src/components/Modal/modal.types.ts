import { ReactNode } from 'react';
import { SxProps } from '@mui/material';

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    hideActions: boolean;
    title: string;
    onClose: () => void;
    sx?: SxProps;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}
