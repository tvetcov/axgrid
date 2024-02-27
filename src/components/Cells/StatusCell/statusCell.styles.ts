import { keyframes } from '@emotion/react';

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

export default { animation: `${pulse} ${250}ms ease infinite` };
