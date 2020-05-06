import { useStaticQuery, graphql } from 'gatsby';

function LatestPostListQuery() {
    const data = useStaticQuery(graphql`
        query LatestPostListQuery {
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

    return data.allMarkdownRemark.edges;
}

export default LatestPostListQuery;
