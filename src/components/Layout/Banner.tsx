import React from "react";
import { navigate } from "gatsby";
import Lottie from "react-lottie";

import { Chip, Container, Grid } from "@material-ui/core";

import LAim from "../../resources/lottie/aim.json";
import {
  BannerContainer,
  BannerContentContainer,
  BannerTitle,
  LottieContainer
} from "./style";

export interface Props {
  title: string;
  tagList: string[];
}

const Banner = ({ title, tagList }: Props) => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LAim
  };

  const BannerContent = () => {
    const onClick = (value: string) => navigate(`/?tag=${value}`);

    return (
      <BannerContentContainer container spacing={1}>
        <Grid item xs={12}>
          <BannerTitle>{title}</BannerTitle>
        </Grid>
        {tagList.map((item, index) => (
          <Grid item key={index}>
            <Chip
              label={`#${item}`}
              color="secondary"
              onClick={() => onClick(item)}
            />
          </Grid>
        ))}
      </BannerContentContainer>
    );
  };

  return (
    <BannerContainer>
      <Container maxWidth="lg" component="section">
        <BannerContent />
        <LottieContainer>
          <Lottie
            width={200}
            height={200}
            options={lottieOptions}
            isClickToPauseDisabled
          />
        </LottieContainer>
      </Container>
    </BannerContainer>
  );
};

export default Banner;
