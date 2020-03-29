/**
 * Layout component
 */
import React from 'react';

import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Backdrop, CircularProgress, Container } from '@material-ui/core';

import Header from './Header';
import SiteMetaDataQuery from '../query/SiteMetaDataQuery';
import '../assets/normalize.css';

interface Props {
    isLoading?: boolean;
}

const theme = createMuiTheme({
    palette: {
        text: { primary: '#27251F' },
        primary: { main: '#00704A' },
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
        color: '#00704A',
    },
}));

const Layout: React.FC<Props> = props => {
    const data = SiteMetaDataQuery();
    const classes = useStyles();

    const Loading = (
        <Backdrop className={classes.backdrop} open={props.isLoading ? true : false}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );

    return (
        <ThemeProvider theme={theme}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Container maxWidth="md">
                <main style={{ margin: '80px 0px' }}>{props.children}</main>

                <footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>

                {Loading}
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
