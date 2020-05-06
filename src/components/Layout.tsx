/**
 * Layout component
 */
import React from 'react';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress } from '@material-ui/core';

import Header from './Header';
import '../resources/style/normalize.css';

interface Props {
    isLoading?: boolean;
}

const theme = createMuiTheme({
    palette: {
        text: { primary: '#27251F' },
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
    const classes = useStyles();

    const Loading = (
        <Backdrop className={classes.backdrop} open={props.isLoading ? true : false}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    return (
        <ThemeProvider theme={theme}>
            <Header />

            <main style={{ marginBottom: '80px' }}>{props.children}</main>

            {Loading}
        </ThemeProvider>
    );
};

export default Layout;
