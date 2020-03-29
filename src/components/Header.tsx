import React from 'react';
import { navigate } from 'gatsby';

import { AppBar, Button, Container, Toolbar, Typography, Grid } from '@material-ui/core';

interface Props {
    siteTitle: string;
}

const Header: React.FC<Props> = props => {
    return (
        <header style={{ height: '101px' }}>
            <AppBar position="fixed" color="default">
                <Toolbar>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid
                                container
                                item
                                xs={12}
                                justify="space-between"
                                alignItems="center"
                                style={{ paddingTop: '12px', paddingBottom: '12px' }}
                            >
                                <Typography variant="h4">AimHo | {props.siteTitle}</Typography>
                                <Button color="inherit">Login</Button>
                            </Grid>
                            <Grid container item xs={12} alignItems="center">
                                <Button onClick={() => navigate('/')}>Home</Button>
                                <Button onClick={() => navigate('/dev')}>Dev</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;
