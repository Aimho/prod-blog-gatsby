/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    title: string;
    description?: string;
    tags?: string;
}

function SEO({ description, tags, title }: Props) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    );

    const lang = 'ko';
    const metaTitle = title || site.siteMetadata.title;
    const metaDescription = description || site.siteMetadata.description;
    const metaKeywords = tags;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: metaKeywords,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ]}
        />
    );
}

SEO.defaultProps = {
    description: ``,
    tags: '',
};

export default SEO;
