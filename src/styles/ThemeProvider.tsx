import React from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import theme from './theme';
import GlobalStyle from './GlobalStyles';

const ThemeProvider: React.FC = ({ children }) => (
    <MuiThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
            <GlobalStyle />
            {children}
        </StyledProvider>
    </MuiThemeProvider>
);

export default ThemeProvider;
