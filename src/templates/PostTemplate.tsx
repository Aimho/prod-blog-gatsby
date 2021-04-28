import React, { useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { DiscussionEmbed } from "disqus-react";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import TagAside from "../components/TagAside";
import TagContent from "../components/TagContent";
import NavPostBtn from "../components/NavPostBtn";
import StyledPostContent from "../resources/style/postContent";
import { PostTemplateProps } from "./types";

const PostTemplate: React.FC<PostTemplateProps> = React.memo(props => {
  const [fadeIn, setFadeIn] = useState(undefined);

  const {
    createdAt,
    title,
    description,
    tags,
    html,
    previousPost,
    nextPost
  } = props.pageContext;

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: {
      url: `${process.env.BASE_URL}${props.path}`,
      identifier: props.path,
      title: title
    },
    style: { marginTop: "60px" }
  };

  return (
    <Layout title={title} tagList={tags}>
      <SEO title={title} tags={tags && tags.join(", ")} />

      <StyledPostContent>
        <Container
          maxWidth="md"
          style={{ marginTop: "60px", position: "relative" }}
        >
          <Typography className="date" variant="caption" component="p">
            {createdAt}
          </Typography>
          <Typography variant="body1">{description}</Typography>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <DiscussionEmbed {...disqusConfig} />

          <Grid container justify="space-between" style={{ marginTop: "48px" }}>
            <Grid item>
              {previousPost ? (
                <NavPostBtn isNext={false} {...previousPost} />
              ) : (
                <></>
              )}
            </Grid>
            <Grid item>
              {nextPost ? <NavPostBtn isNext={true} {...nextPost} /> : <></>}
            </Grid>
          </Grid>
          <TagAside className="tag-aside" onFadeIn={() => setFadeIn(false)} />
        </Container>
      </StyledPostContent>
    </Layout>
  );
});

PostTemplate.displayName = "PostTemplate";

export default PostTemplate;
