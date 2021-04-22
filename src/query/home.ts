import { graphql, useStaticQuery } from "gatsby";

interface ITag {
  tag: string;
  totalCount: number;
}
export const getTagList: () => ITag[] = () => {
  try {
    const {
      allMarkdownRemark: { group }
    } = useStaticQuery(graphql`
      query getTags {
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___tags }) {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `);

    return group;
  } catch {
    return [];
  }
};
