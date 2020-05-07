import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    title: string;
    description?: string;
    image?: string;
    article?: boolean;
    tags?: string;
}

function SEO({ description, tags, title, image, article }: Props) {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);
    const { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

    const seo = {
        lang: 'ko',
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
        keywords: tags,
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{ lang: seo.lang }}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.keywords && <meta name="keywords" content={seo.keywords} />}
        </Helmet>
    );
}

export default SEO;

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
    tags: null,
};

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
            }
        }
    }
`;
