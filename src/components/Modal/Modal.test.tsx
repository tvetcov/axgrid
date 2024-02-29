import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Modal from './Modal.component';

describe('Modal', () => {
    it('should render Modal, its content and its title', () => {
        render(
            <Modal isOpen={true} title="Title" onClose={() => {}}>
                <div>Content</div>
            </Modal>
        );

        expect(screen.getByRole('dialog')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('should not render Modal actions when specified', () => {
        render(
            <Modal isOpen={true} title="Title" onClose={() => {}} hideActions>
                <div>Content</div>
            </Modal>
        );

        expect(screen.queryByText('Close')).not.toBeInTheDocument();
    });
});
