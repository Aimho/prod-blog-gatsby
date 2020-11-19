import { createMuiTheme } from '@material-ui/core';
import colorSet from './colorSet';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: colorSet.primaryLight,
            main: colorSet.primaryBase,
            dark: colorSet.primaryDark,
        },
        text: {
            primary: colorSet.gray900,
            secondary: colorSet.gray600,
            disabled: colorSet.gray300,
        },
    },
});

export default theme;
