import React from 'react';
import { MuiBackdrop } from './style';

export interface Props {
    isOpen: boolean;
    backdropInvisible?: boolean;
    position?: 'fixed' | 'absolute';
    style?: React.CSSProperties;
}

const BackdropPanelView: React.FC<Props> = ({
    isOpen,
    backdropInvisible = false,
    position = 'fixed',
    children,
    style,
}) => (
    <MuiBackdrop open={isOpen} invisible={backdropInvisible} style={{ position, ...style }}>
        {children}
    </MuiBackdrop>
);

export default BackdropPanelView;
