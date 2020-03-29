import React from 'react';
import { Link, navigate } from 'gatsby';
import { Card, CardContent, Typography } from '@material-ui/core';

import Image from '../components/image';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import LatestPostListQuery from '../query/LatestPostListQuery';

const IndexPage: React.FC = () => {
    const data = LatestPostListQuery();
    const isData = data && data.length > 0;

    return (
        <Layout isLoading={!isData}>
            <SEO title="AimHo Blog" />

            <Profile />

            {isData &&
                data.map(d => {
                    const frontmatter = d.node.frontmatter;
                    const id = d.node.id;
                    return (
                        <Card key={id} onClick={() => navigate(`/${frontmatter.path}`)}>
                            <CardContent>
                                <Typography variant="h4">{frontmatter.title}</Typography>
                                <Typography variant="body1">{frontmatter.createdAt}</Typography>
                            </CardContent>
                        </Card>
                    );
                })}
        </Layout>
    );
};

export default IndexPage;
