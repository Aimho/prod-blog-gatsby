import React from 'react';
import { graphql, Link } from 'gatsby';

import { TagTemplateProps } from './types';

const TagTemplate: React.FC<TagTemplateProps> = React.memo(props => {
    const { tag } = props.pageContext;
    const { edges, totalCount } = props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;

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
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
            <Link to="/tags">All tags</Link>
        </div>
    );
});

TagTemplate.displayName = 'TagTemplate';

export default TagTemplate;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
