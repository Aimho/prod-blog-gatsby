module.exports = {
    siteMetadata: {
        title: `Blog`,
        titleTemplate: 'AimHo · %s',
        description: `IT 스타트업 개발자(30, 남)의 고뇌를 담은 블로그`,
        siteUrl: 'https://aimho.me', // No trailing slash allowed!
        image: '/og.png', // Path to your image you placed in the 'static' folder
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `resources`,
                path: `${__dirname}/src/resources`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'contents',
                path: `${__dirname}/src/contents`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                start_url: `/`,
                icon: `src/resources/images/favicon.svg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1024,
                            linkImagesToOriginal: false,
                            sizeByPixelDensity: true,
                            showCaptions: true,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            languageExtensions: [
                                {
                                    language: 'superscript',
                                    extend: 'javascript',
                                    definition: {
                                        superscript_types: /(SuperType)/,
                                    },
                                    insertBefore: {
                                        function: {
                                            superscript_keywords: /(superif|superelse)/,
                                        },
                                    },
                                },
                            ],
                            prompt: {
                                user: 'root',
                                host: 'localhost',
                                global: false,
                            },
                            escapeEntities: {},
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'UA-167056929-1',
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-material-ui`,
        `gatsby-plugin-advanced-sitemap`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
