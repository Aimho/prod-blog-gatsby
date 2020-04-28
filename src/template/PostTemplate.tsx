import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { IPostTemplateProps } from './types';
import Layout from '../components/Layout';
import Utterances from '../components/Utterances';

const PostTemplate: React.FC<IPostTemplateProps> = React.memo(props => {
    const { createdAt, title, description, html } = props.pageContext;

    return (
        <Layout>
            <Container maxWidth="md" style={{ paddingTop: '60px' }}>
                <Typography variant="caption" style={{ color: '#2085FF', marginBottom: '14px' }} component="p">
                    {createdAt}
                </Typography>
                <Typography variant="h4" style={{ fontWeight: 600, marginBottom: '10px' }}>
                    {title}
                </Typography>
                <Typography variant="body1" style={{ color: '#878787' }}>
                    {description}
                </Typography>

                <hr />
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <Utterances repo="Aimho/prod-blog-utterances" />
            </Container>
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
