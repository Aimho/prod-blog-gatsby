import React from 'react';
import { Container, Typography } from '@material-ui/core';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import TagAside from '../components/TagAside';
import TagContent from '../components/TagContent';
import Utterances from '../components/Utterances';
import StyledPostContent from '../resources/style/postContent';
import StyledIndexContent from '../resources/style/IndexContent';
import { PostTemplateProps } from './types';

const PostTemplate: React.FC<PostTemplateProps> = React.memo(props => {
    const { createdAt, title, tags, html } = props.pageContext;

    return (
        <Layout>
            <SEO title={`AimHo | ${title}`} tags={tags && tags.join(', ')} />

            <StyledIndexContent>
                <StyledPostContent>
                    <Container maxWidth="md" style={{ marginTop: '60px' }}>
                        <Typography className="date" variant="caption" component="p">
                            {createdAt}
                        </Typography>
                        <Typography variant="h1">{title}</Typography>
                        <TagContent tags={tags} />

                        <div dangerouslySetInnerHTML={{ __html: html }} />

                        <Utterances repo="Aimho/prod-blog-utterances" />
                        <TagAside />
                    </Container>
                </StyledPostContent>
            </StyledIndexContent>
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
