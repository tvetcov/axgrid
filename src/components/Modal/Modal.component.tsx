import { MouseEvent } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import modalStyles from './modal.styles';
import { ModalProps } from './modal.types';

const Modal = ({
    children,
    isOpen,
    onClose,
    title,
    maxWidth,
    hideActions = false,
    sx = {}
}: ModalProps) => {
    const handleClick = (e: MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    return (
        <Dialog
            onClose={onClose}
            onClick={handleClick}
            aria-labelledby="customized-dialog-title"
            open={isOpen}
            maxWidth={maxWidth}
            fullWidth
        >
            <div onClick={e => e.stopPropagation()}>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme => theme.palette.grey[500]
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{ ...modalStyles.content, ...sx }}>
                    {children}
                </DialogContent>
                {!hideActions && (
                    <DialogActions>
                        <Button autoFocus variant="contained" onClick={onClose}>
                            Close
                        </Button>
                    </DialogActions>
                )}
            </div>
        </Dialog>
    );
};

export default Modal;
