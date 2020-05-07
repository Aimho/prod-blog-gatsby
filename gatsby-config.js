module.exports = {
    siteMetadata: {
        title: `AimHo`,
        titleTemplate: '%s · The Real Hero',
        description: `AimHo 블로그 입니다.`,
        url: 'https://aimhome.com', // No trailing slash allowed!
        image: './src/resources/images/Rectangle.png', // Path to your image you placed in the 'static' folder
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
                icon: `src/resources/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-material-ui`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
