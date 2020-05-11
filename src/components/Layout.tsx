/**
 * Layout component
 */
import React, { useState, useEffect } from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Fade } from '@material-ui/core';

import Header from './Header';
import '../resources/style/normalize.css';

interface Props {
    in?: boolean;
}

const theme = createMuiTheme({
    palette: {
        text: { primary: '#2085ff' },
        primary: { main: '#000' },
    },
    typography: {
        h4: {
            fontFamily: 'Bitter, Nanum Gothic, serif, sans-serif',
        },
    },
});

const Layout: React.FC<Props> = props => {
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        if (props.in === undefined) {
            return setFadeIn(() => true);
        }
        setFadeIn(() => false);
    }, [props.in]);

    return (
        <ThemeProvider theme={theme}>
            <Header />

            <Fade in={fadeIn}>
                <main style={{ marginBottom: '80px' }}>{props.children}</main>
            </Fade>
        </ThemeProvider>
    );
};

export default Layout;
