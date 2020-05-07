import React from 'react';
import { Container, Typography, Grid, Chip } from '@material-ui/core';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import Utterances from '../components/Utterances';
import StyledPostContent from '../resources/style/postContent';

import { PostTemplateProps } from './types';

const PostTemplate: React.FC<PostTemplateProps> = React.memo(props => {
    const { createdAt, title, subTitle, tags, html } = props.pageContext;

    // tag components
    const Tag: React.FC = () => {
        if (!tags) return null;

        return (
            <Grid container spacing={2} style={{ marginBottom: '48px' }}>
                {tags.map((tag, index) => (
                    <Grid item key={index}>
                        <Chip label={tag} size="small" style={{ backgroundColor: '#2085FF', color: '#fff' }} />
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <Layout>
            <SEO title={`AimHo | ${title}`} tags={tags && tags.join(', ')} />

            <StyledPostContent>
                <Container maxWidth="md" style={{ paddingTop: '60px' }}>
                    <Typography variant="caption" style={{ color: '#2085FF' }} component="p">
                        {createdAt}
                    </Typography>
                    <Typography variant="h1">{title}</Typography>
                    <Typography variant="body1" style={{ color: '#878787', marginBottom: '10px' }}>
                        {subTitle}
                    </Typography>

                    <Tag />

                    <div dangerouslySetInnerHTML={{ __html: html }} />

                    <Utterances repo="Aimho/prod-blog-utterances" />
                </Container>
            </StyledPostContent>
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
