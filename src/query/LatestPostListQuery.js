import { useStaticQuery, graphql } from 'gatsby';

function LatestPostListQuery() {
    const data = useStaticQuery(graphql`
        query LatestPostListQuery {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___createdAt }) {
                edges {
                    node {
                        frontmatter {
                            path
                            createdAt(formatString: "YYYY-MM-DD. HH:mm")
                            title
                        }
                        id
                    }
                }
            }
        }
    `);

    return data.allMarkdownRemark.edges;
}

export default LatestPostListQuery;
