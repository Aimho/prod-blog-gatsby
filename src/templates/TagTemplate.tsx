import React from 'react';
import { Link, graphql } from 'gatsby';

import { TagTemplateProps } from './types';

const TagTemplate: React.FC<TagTemplateProps> = React.memo(props => {
    console.log(props);
    const { tag } = props.pageContext;
    const { edges } = props.data.allMarkdownRemark;
    const tagHeader = `${edges.length} post${edges.length === 1 ? '' : 's'} tagged with "${tag}"`;

    return (
        <div>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.fields;
                    const { title } = node.frontmatter;
                    return (
                        <li key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
            <Link to="/tags">All tags</Link>
        </div>
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
                        subTitle
                        title
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
