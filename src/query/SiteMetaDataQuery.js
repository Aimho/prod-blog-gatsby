import { useStaticQuery, graphql } from 'gatsby';

function SiteMetaDataQuery() {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return data;
}

export default SiteMetaDataQuery;
