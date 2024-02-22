import { MouseEvent } from 'react';

import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import linkStyles from './linkCell.styles';

const LinkCell = ({ href, label }: { href: string; label: string }) => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
    };

    return (
        <Tooltip title="Open in New Tab" arrow disableInteractive>
            <Link
                href={href}
                onClick={handleClick}
                underline="always"
                target="_blank"
                rel="noopener"
                sx={linkStyles}
            >
                {label}
                <OpenInNewIcon />
            </Link>
        </Tooltip>
    );
};

export default LinkCell;
