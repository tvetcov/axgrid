import { ReactNode } from 'react';

export interface ModalProps {
    children: ReactNode;
    isOpen: boolean;
    title: string;
    onClose: () => void;
}
