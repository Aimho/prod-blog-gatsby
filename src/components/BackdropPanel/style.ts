import styled from 'styled-components';
import { Backdrop, ButtonBase } from '@material-ui/core';
import zIndex from '@material-ui/core/styles/zIndex';

export const MuiBackdrop = styled(Backdrop)`
    z-index: ${zIndex.drawer + 1};
    background-color: rgba(31, 33, 38, 0.5);
    flex-direction: column;
    &.MuiBackdrop-invisible {
        background-color: transparent;
    }
`;

export const MuiBackdropButton = styled(ButtonBase)`
    min-width: 78px;
    padding: 6px 16px;
    padding-bottom: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    margin-top: 30px;
    &:disabled {
        visibility: hidden;
    }
`;
