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
                            createdAt(formatString: "YYYY-MM-DD")
                            title
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
            },
            component: path.resolve(__dirname, '../template/PostTemplate.tsx'),
        });
    });
}
