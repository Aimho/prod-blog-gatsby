import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;
    const { data, errors } = await graphql<any>(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            createdAt(formatString: "YYYY년 M월 D일")
                            title
                            subTitle
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        throw errors;
    }

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            context: {
                html: node.html,
                createdAt: node.frontmatter.createdAt,
                title: node.frontmatter.title,
                subTitle: node.frontmatter.subTitle,
                tags: node.frontmatter.tags,
            },
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
        });
    });
}
