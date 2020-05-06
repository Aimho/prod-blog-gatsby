import { graphql, useStaticQuery } from 'gatsby';

const query = () => {
    // 최신 순서대로 post를 불러옴
    const result = useStaticQuery(graphql`
        query getMarkdown {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___createdAt] }) {
                edges {
                    node {
                        id
                        frontmatter {
                            createdAt(formatString: "YYYY년 M월 D일")
                            subTitle
                            title
                        }
                        rawMarkdownBody
                        fields {
                            slug
                        }
                    }
                }
                group(field: frontmatter___tags) {
                    tag: fieldValue
                    totalCount
                }
            }
        }
    `);

    return {
        getPosts: result.allMarkdownRemark.edges,
        getAllTags: result.allMarkdownRemark.group,
    };
};

export default query;
