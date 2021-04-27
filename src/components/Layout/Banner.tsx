import React from "react";
import { navigate } from "gatsby";
import Lottie from "react-lottie";

import { Chip, Container, Grid, IconButton } from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

import LAim from "../../resources/lottie/aim.json";
import getStaticQuery from "../../utils/getStaticQuery";
import {
  BannerContainer,
  BannerContentContainer,
  BannerTitle,
  MuiGridContainer,
  LottieContainer
} from "./style";

export interface Props {
  title?: string;
  search?: string;
}

const Banner = ({ title, search }: Props) => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LAim
  };

  const BannerContent = () => {
    if (title) return <BannerTitle>{title}</BannerTitle>;

    const { tagList } = getStaticQuery();
    const bestTagList = tagList
      .sort((prev, next) => next.totalCount - prev.totalCount)
      .slice(0, 10);

    const onClick = (value: string) => navigate(`/?tag=${value}`);

    return (
      <BannerContentContainer container spacing={1}>
        <Grid item xs={12}>
          <BannerTitle>{search}</BannerTitle>
        </Grid>
        {bestTagList.map((item, index) => (
          <Grid item key={index}>
            <Chip
              label={`#${item.tag}`}
              color="secondary"
              onClick={() => onClick(item.tag)}
            />
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
