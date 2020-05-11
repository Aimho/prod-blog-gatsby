/**
 * Layout component
 */
import React, { useState, useEffect } from 'react';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress, Fade } from '@material-ui/core';

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

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));

const Layout: React.FC<Props> = props => {
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        if (props.in === undefined) {
            return setFadeIn(() => true);
        }
        setFadeIn(() => false);
    }, [props.in]);

    const classes = useStyles();

    const Loading = (
        <Backdrop className={classes.backdrop} open={fadeIn ? false : true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    return (
        <ThemeProvider theme={theme}>
            <Header />

            <Fade in={fadeIn}>
                <main style={{ marginBottom: '80px' }}>{props.children}</main>
            </Fade>

            {Loading}
        </ThemeProvider>
    );
};

export default Layout;
