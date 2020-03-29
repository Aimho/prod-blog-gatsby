import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

const Profile: React.FC = () => (
    <Card variant="outlined" style={{ marginBottom: '32px' }}>
        <CardContent>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                    <CardMedia
                        style={{ borderRadius: '4px', height: '250px', objectFit: 'cover' }}
                        image={require('../assets/index-profile.jpeg')}
                        title="AimHo Profile"
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography gutterBottom variant="h5" component="h2">
                        AimHo | JoJunHo
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" style={{ margin: '12px 0px' }}>
                        Web Frontend Developer
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <b>기술스택</b>
                        <br />
                        - HTML, CSS, SCSS, JavaScript, TypeScript, React, styled-component
                        <br />
                        <br />
                        <b>경력</b>
                        <br />
                        - 호서대학교 게임학과 (2010.03 ~ 2016.03) <br />
                        - (주) 게임스프링 클라이언트 프로그래머 (2016.03 ~ 2018.01 ) <br />
                        - 마녀콘텐츠 웹 퍼블리셔 (2018.03 ~ 2018.03) <br />- 크리에이터블 프론트엔드 개발자 (2018.10 ~
                        재직 중)
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button size="small" color="primary" href="mailto: jjhwhwnsgh@gmail.com">
                EMAIL
            </Button>
            <Button size="small" color="primary" href="https://github.com/Aimho">
                GIT
            </Button>
            <Button size="small" color="primary" href="https://www.facebook.com/jjhwhwnsgh?ref=bookmarks">
                FACEBOOK
            </Button>
            <Button size="small" color="primary" href="https://www.instagram.com/aimho57/?hl=ko">
                INSTAGRAM
            </Button>
        </CardActions>
    </Card>
);

export default Profile;
