import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import { GitHub, Facebook, LocalOffer, Cancel } from '@material-ui/icons';
import { Fab, Container, Grid, Drawer, Button } from '@material-ui/core';

import TagAside from './TagAside';
import setMobileCSS from '../utils/setMobileCSS';

const StyledHeader = styled.header`
    padding: 12px 0px;
    background-color: #000;
    img {
        height: 30px;
        cursor: pointer;
    }
    .tagBtn {
        display: none;
        ${setMobileCSS(`display: inline-flex;`, 1440)}
    }
`;

const StyledDrawer = styled.div`
    position: relative;
    padding: 24px;
    button {
        position: absolute;
        right: 8px;
        top: 16px;
    }
`;

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const onClickHome = () => navigate('/');
    const onClickOpenDrawer = () => setOpen(true);
    const onClickCloseDrawer = () => setOpen(false);

    return (
        <StyledHeader>
            <Container maxWidth="lg">
                <Grid container justify="space-between" alignItems="center">
                    <img src={require('../resources/images/logo.png')} alt="AimHo Blog" onClick={onClickHome} />
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
                        <Fab
                            className="tagBtn"
                            size="small"
                            color="primary"
                            aria-label="tag"
                            onClick={onClickOpenDrawer}
                        >
                            <LocalOffer />
                        </Fab>
                    </div>
                </Grid>
            </Container>
            <Drawer anchor="right" open={open} onClose={onClickCloseDrawer}>
                <StyledDrawer>
                    <TagAside />
                    <Button variant="text" onClick={onClickCloseDrawer}>
                        <Cancel />
                    </Button>
                </StyledDrawer>
            </Drawer>
        </StyledHeader>
    );
};

export default Header;
