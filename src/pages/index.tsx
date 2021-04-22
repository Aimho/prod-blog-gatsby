import React, { useState } from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import TagAside from "../components/TagAside";
import CardContent from "../components/CardContent";
import StyledIndexContent from "../resources/style/IndexContent";
import staticQuery from "../utils/staticQuery";
import { isValidArray } from "../utils/checker";

// Todo: List 더 보기 버튼
const IndexPage: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(undefined);
  const posts = staticQuery().getPosts;

  return (
    <Layout>
      <SEO title="Home" />

      {isValidArray(posts) &&
        posts.map((d, index) => {
          const id = d.node.id;
          const fields = d.node.fields;
          const frontmatter = d.node.frontmatter;
          const onClick = () => {
            setFadeIn(false);
          };

          return (
            <StyledIndexContent key={id}>
              <CardContent {...frontmatter} onClick={onClick} />
              {index === 1 && <TagAside onFadeIn={() => setFadeIn(false)} />}
            </StyledIndexContent>
          );
        })}
    </Layout>
  );
};

export default IndexPage;
