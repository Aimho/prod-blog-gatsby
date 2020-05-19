import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import lodash from 'lodash';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;
    const { data, errors } = await graphql<any>(query);

    if (errors) return console.error(errors);

    // create post pages
    const posts = data.posts.edges;
    posts.forEach(({ node, previous, next }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
            context: {
                html: node.html,
                createdAt: node.frontmatter.createdAt,
                title: node.frontmatter.title,
                description: node.frontmatter.description,
                tags: node.frontmatter.tags,
                previousPost: previous
                    ? {
                          path: previous.fields.slug,
                          title: previous.frontmatter.title,
                      }
                    : undefined,
                nextPost: next
                    ? {
                          path: next.fields.slug,
                          title: next.frontmatter.title,
                      }
                    : undefined,
            },
        });
    });

    // create tag pages
    const tags = data.tagsGroup.group;
    tags.forEach(tag => {
        createPage({
            path: `/tags/${lodash.kebabCase(tag.fieldValue)}`,
            component: path.resolve(__dirname, '../templates/TagTemplate.tsx'),
            context: {
                tag: tag.fieldValue,
            },
        });
    });
}

const query = `
  {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___createdAt] }, limit: 2000) {
        edges {
            previous {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
            }
            node {
                html
                frontmatter {
                    createdAt(formatString: "YYYY년 M월 D일")
                    title
                    description
                    tags
                }
                fields {
                    slug
                }
            }
            next {
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
        }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
            fieldValue
        }
    }
  }
`;
