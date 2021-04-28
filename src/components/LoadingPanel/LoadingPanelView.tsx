import React from 'react';
import { CircularProgress } from '@material-ui/core';
import BackdropPanel, { Props } from '../BackdropPanel/BackdropPanelView';

const LoadingPanelView = (props: Props) => (
    <BackdropPanel {...props}>
        <CircularProgress color="primary" />
    </BackdropPanel>
);

export default LoadingPanelView;
