import React from "react";
import Lottie from "react-lottie";
import queryString from "query-string";

import { Chip, Container, Grid, IconButton } from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

import LAim from "../../resources/lottie/aim.json";
import { getTagList } from "../../query/home";
import {
  BannerContainer,
  BannerContentContainer,
  BannerTitle,
  MuiGridContainer,
  LottieContainer
} from "./style";

export interface Props {
  title?: string;
}

const Banner = ({ title }: Props) => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LAim
  };

  const BannerContent = () => {
    const { search } = queryString.parse(window.location.search);
    if (search) return <BannerTitle>Search / {search}</BannerTitle>;
    if (title) return <BannerTitle>{title}</BannerTitle>;

    const tagList = getTagList();
    if (tagList.length === 0) return <BannerTitle>Blog</BannerTitle>;

    const bestTagList = tagList
      .sort((prev, next) => next.totalCount - prev.totalCount)
      .slice(0, 10);

    return (
      <BannerContentContainer container spacing={1}>
        {bestTagList.map(({ tag }, index) => (
          <Grid item key={index}>
            <Chip label={`#${tag}`} color="secondary" />
          </Grid>
        ))}
        <Grid item>
          <IconButton color="primary" size="small">
            <LocalOffer />
          </IconButton>
        </Grid>
      </BannerContentContainer>
    );
  };

  return (
    <BannerContainer>
      <Container maxWidth="lg" component="section">
        <MuiGridContainer container spacing={2} justify="space-between">
          <Grid item xs={12} sm={8} md={6} style={{ marginTop: "auto" }}>
            <BannerContent />
          </Grid>
          <Grid item xs={12} sm={2} style={{ position: "relative" }}>
            <LottieContainer>
              <Lottie
                width={200}
                height={200}
                options={lottieOptions}
                isClickToPauseDisabled
              />
            </LottieContainer>
          </Grid>
        </MuiGridContainer>
      </Container>
    </BannerContainer>
  );
};

export default Banner;
