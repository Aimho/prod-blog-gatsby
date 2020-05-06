import React from 'react';
import { navigate } from 'gatsby';
import { GitHub, Facebook } from '@material-ui/icons';
import { Fab, Container, Grid } from '@material-ui/core';

import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 12px 0px;
    background-color: #000;
    img {
        height: 20px;
        cursor: pointer;
    }
`;

const Header: React.FC = () => (
    <StyledHeader>
        <Container maxWidth="lg">
            <Grid container justify="space-between" alignItems="center">
                <img src={require('../resources/images/logo.png')} alt="AimHo Blog" onClick={() => navigate('/')} />
                <div>
                    <Fab
                        size="small"
                        color="primary"
                        aria-label="github"
                        onClick={() => window.open('https://github.com/Aimho')}
                    >
                        <GitHub fontSize="small" />
                    </Fab>
                    <Fab
                        size="small"
                        color="primary"
                        aria-label="facebook"
                        onClick={() => window.open('https://www.facebook.com/jjhwhwnsgh')}
                    >
                        <Facebook />
                    </Fab>
                </div>
            </Grid>
        </Container>
    </StyledHeader>
);

export default Header;
