import React from 'react';
import { navigate } from 'gatsby';

import { Button, Typography, Grid } from '@material-ui/core';
import { ErrorRounded } from '@material-ui/icons';

import Layout from '../components/Layout';

const ErrorPage = () => {
    return (
        <Layout>
            <Grid container alignItems="center" direction="column" style={{ padding: '60px 0' }}>
                <ErrorRounded style={{ fontSize: '64px', color: 'rgb(229, 57, 53)' }} />
                <Typography variant="h4" style={{ margin: '32px 0px' }} align="center">
                    찾을 수 없는 페이지 입니다.
                </Typography>
                <Button size="large" onClick={() => navigate('/')} style={{ marginTop: '32px' }}>
                    메인으로 돌아가기
                </Button>
            </Grid>
        </Layout>
    );
};

export default ErrorPage;
