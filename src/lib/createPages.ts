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
                            description
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
                description: node.frontmatter.description,
            },
            component: path.resolve(__dirname, '../template/PostTemplate.tsx'),
        });
    });
}
