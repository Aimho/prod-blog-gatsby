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
                            path
                            createdAt(formatString: "YYYY-MM-DD. HH:mm")
                            title
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
            path: node.frontmatter.path,
            context: {
                html: node.html,
                createdAt: node.frontmatter.createdAt,
                title: node.frontmatter.title,
            },
            component: path.resolve(__dirname, '../template/PostTemplate.tsx'),
        });
    });
}
