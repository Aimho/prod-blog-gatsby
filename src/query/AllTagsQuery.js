import { useStaticQuery, graphql } from 'gatsby';

function AllTagsQuery() {
    const data = useStaticQuery(graphql`
        query AllTagsQuery {
            allMarkdownRemark {
                group(field: frontmatter___tags) {
                    tag: fieldValue
                    totalCount
                }
            }
        }
    `);

    return data.allMarkdownRemark.group;
}

export default AllTagsQuery;
