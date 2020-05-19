import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { DiscussionEmbed } from 'disqus-react';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import TagAside from '../components/TagAside';
import TagContent from '../components/TagContent';
import StyledPostContent from '../resources/style/postContent';
import StyledIndexContent from '../resources/style/IndexContent';
import { PostTemplateProps } from './types';

const PostTemplate: React.FC<PostTemplateProps> = React.memo(props => {
    const [fadeIn, setFadeIn] = useState(undefined);

    const { createdAt, title, description, tags, html } = props.pageContext;
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: {
            url: `${process.env.BASE_URL}${props.path}`,
            identifier: props.path,
            title: title,
        },
        style: { marginTop: '60px' },
    };

    return (
        <Layout in={fadeIn}>
            <SEO title={title} tags={tags && tags.join(', ')} />

            <StyledIndexContent>
                <StyledPostContent>
                    <Container maxWidth="md" style={{ marginTop: '60px' }}>
                        <Typography className="date" variant="caption" component="p">
                            {createdAt}
                        </Typography>
                        <Typography variant="h1">{title}</Typography>
                        <TagContent tags={tags} />
                        <Typography variant="body2">{description}</Typography>

                        <div dangerouslySetInnerHTML={{ __html: html }} />

                        <DiscussionEmbed {...disqusConfig} />
                        <TagAside onFadeIn={() => setFadeIn(false)} />
                    </Container>
                </StyledPostContent>
            </StyledIndexContent>
        </Layout>
    );
});

PostTemplate.displayName = 'PostTemplate';

export default PostTemplate;
