import React, { Fragment, useState } from 'react';
import { navigate, graphql } from 'gatsby';
import { Typography, Container } from '@material-ui/core';

import SEO from '../components/Seo';
import Layout from '../components/Layout';
import TagAside from '../components/TagAside';
import CardContent from '../components/CardContent';
import StyledIndexContent from '../resources/style/IndexContent';
import { isValidArray } from '../utils/checker';
import { TagTemplateProps } from './types';

const TagTemplate: React.FC<TagTemplateProps> = React.memo(props => {
    const [fadeIn, setFadeIn] = useState(undefined);

    const { tag } = props.pageContext;
    const posts = props.data.allMarkdownRemark.edges;
    const headerStyle = {
        marginTop: '82px',
        marginBottom: '72px',
    };
    const tagHeader = (
        <Fragment>
            <b style={{ color: '#2085FF' }}>{tag} 태그</b>가 포함된 글 ({posts.length})
        </Fragment>
    );

    return (
        <Layout>
            <SEO title={`${tag} 태그가 포함된 글`} />

            <StyledIndexContent>
                <Container maxWidth="md">
                    <Typography variant="h4" style={headerStyle}>
                        {tagHeader}
                    </Typography>
                </Container>

                {isValidArray(posts) &&
                    posts.map(d => {
                        const id = d.node.id;
                        const fields = d.node.fields;
                        const frontmatter = d.node.frontmatter;
                        const onClick = () => {
                            setFadeIn(false);
                            navigate(`/${fields.slug}`);
                        };

                        return <CardContent {...frontmatter} onClick={onClick} key={id} />;
                    })}
                <TagAside onFadeIn={() => setFadeIn(false)} />
            </StyledIndexContent>
        </Layout>
    );
});

TagTemplate.displayName = 'TagTemplate';

export default TagTemplate;

export const pageQuery = graphql`
    query($tag: String) {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___createdAt] }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        createdAt(formatString: "YYYY년 M월 D일")
                        description
                        title
                        tags
                    }
                    rawMarkdownBody
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
