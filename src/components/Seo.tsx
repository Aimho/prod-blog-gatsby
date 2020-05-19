import React from 'react';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    title: string;
    description?: string;
    image?: string;
    tags?: string;
}

function SEO({ description, tags, title, image }: Props) {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);
    const { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

    const seo = {
        lang: 'ko',
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        siteUrl: `${siteUrl}${pathname}`,
        keywords: tags,
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{ lang: seo.lang }}>
            <meta property="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:title" content={defaultTitle} />
            <meta property="og:description" content={defaultDescription} />
            <meta property="og:image" content={defaultImage} />
            <meta property="og:type" content="article" />
            {seo.keywords && <meta name="keywords" content={seo.keywords} />}

            <meta name="google-site-verification" content="nPCEvVUtafq3NEt5n8kQ-fQvrQCDsyTQ3yKuCwuctWg" />
        </Helmet>
    );
}

export default SEO;

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: siteUrl
                defaultImage: image
            }
        }
    }
`;
