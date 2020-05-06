import { graphql, useStaticQuery } from 'gatsby';

/**
 * 최신 순서대로 post를 불러옴
 */
export const QGetPosts = () => {
    const data = useStaticQuery(graphql`
        query getPosts {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___createdAt] }, limit: 10) {
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
            }
        }
    `);

    console.log(data);

    return data.allMarkdownRemark.edges;
};
