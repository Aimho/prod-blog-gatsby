import { CreatePagesArgs } from 'gatsby';
import path from 'path';
import lodash from 'lodash';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;
    const { data, errors } = await graphql<any>(query);

    if (errors) {
        return console.error(errors);
    }

    // create post pages
    const posts = data.posts.edges;
    posts.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
            context: {
                html: node.html,
                createdAt: node.frontmatter.createdAt,
                title: node.frontmatter.title,
                subTitle: node.frontmatter.subTitle,
                tags: node.frontmatter.tags,
            },
        });
    });

    // create tag pages
    const tags = data.tagsGroup.group;
    tags.forEach(tag => {
        createPage({
            path: `/tags/${lodash.kebabCase(tag.fieldValue)}/`,
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
    tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
            fieldValue
        }
    }
  }
`;
