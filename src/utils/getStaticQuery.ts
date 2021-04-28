import { graphql, useStaticQuery } from "gatsby";

interface ITag {
  tag: string;
  totalCount: number;
}

export interface IPost {
  id: string;
  slug: string;
  body: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
}

type TGetStaticQuery = () => {
  tagList: ITag[];
  postList: IPost[];
};

const getStaticQuery: TGetStaticQuery = () => {
  const {
    getTag: { tagList },
    getPost: { postList }
  } = useStaticQuery(graphql`
    query getStaticQuery {
      getTag: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___tags }
      ) {
        tagList: group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
      getPost: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___createdAt] }
      ) {
        postList: nodes {
          id
          rawMarkdownBody
          frontmatter {
            tags
            title
            description
            createdAt(formatString: "YYYY년 M월 D일")
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  return {
    tagList,
    postList: postList.map(post => ({
      id: post.id,
      slug: post.fields.slug,
      body: post.rawMarkdownBody,
      ...post.frontmatter
    }))
  };
};

export default getStaticQuery;
