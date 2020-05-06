import React, { useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import { GitHub, Facebook, TagFaces } from '@material-ui/icons';
import { Fab, Container, Grid, Drawer, Chip } from '@material-ui/core';

import query from '../utils/query';

const StyledHeader = styled.header`
    padding: 12px 0px;
    background-color: #000;
    img {
        height: 20px;
        cursor: pointer;
    }
`;

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const tags = query().getAllTags;
    const isTags = tags && tags.length > 0;
    console.log(tags);

    return (
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
                        <Fab size="small" color="primary" aria-label="tag" onClick={() => setOpen(true)}>
                            <TagFaces />
                        </Fab>
                    </div>
                </Grid>
            </Container>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Grid
                    container
                    spacing={2}
                    wrap="wrap"
                    style={{ padding: '24px', minHeight: '100vh', backgroundColor: '#000' }}
                >
                    {isTags &&
                        tags.map((t, index) => (
                            <Grid item key={index}>
                                <Chip
                                    label={`${t.tag} ${t.totalCount}`}
                                    style={{ backgroundColor: '#2085FF', color: '#fff' }}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Drawer>
        </StyledHeader>
    );
};

export default Header;
