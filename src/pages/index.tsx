import React, { useState, useEffect } from "react";
import queryString from "query-string";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import getStaticQuery from "../utils/getStaticQuery";

interface queryProps {
  tag?: string;
  search?: string;
}

const IndexPage: React.FC = () => {
  const { postList, tagList } = getStaticQuery();
  const [list, setList] = useState(postList);

  const { search, tag }: queryProps = queryString.parse(window.location.search);

  const bestTagList = tagList
    .sort((prev, next) => next.totalCount - prev.totalCount)
    .slice(0, 10)
    .map(item => item.tag);

  const title = () => {
    if (search) return `Search / ${search}`;
    if (tag) return `Tag / ${tag}`;
    return "Blog";
  };

  useEffect(() => {
    if (search) {
      const filterList = postList.filter(item => item.body.includes(search));
      setList(() => filterList);
    } else if (tag) {
      const filterList = postList.filter(item => item.tags.includes(tag));
      setList(() => filterList);
    } else {
      setList(postList);
    }
  }, [search, tag]);

  return (
    <Layout title={title()} tagList={bestTagList}>
      <SEO title="Home" />
      <PostList list={list} />
    </Layout>
  );
};

export default IndexPage;
