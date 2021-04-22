import styled, { css } from "styled-components";
import { Paper, Grid } from "@material-ui/core";

export const LogoImg = styled.img`
  height: 30px;
  cursor: pointer;
  margin-right: auto;
`;

export const BannerContainer = styled(Paper)`
  overflow: hidden;
`;

export const MuiGridContainer = styled(Grid)`
  padding: 32px 0;
  min-height: 264px;
  ${({ theme }) => css`
    ${theme.breakpoints.down("xs")} {
      min-height: 132px;
    }
  `}
`;

export const BannerContentContainer = styled(Grid)`
  padding: 32px 0;
  position: relative;
  ${({ theme }) => css`
    z-index: ${theme.zIndex.speedDial};
  `}
`;

export const BannerTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 12px;
  ${({ theme }) => css`
    ${theme.breakpoints.down("xs")} {
      font-size: 32px;
    }
  `}
`;

export const LottieContainer = styled.span`
  right: 100%;
  position: absolute;
  ${({ theme }) => css`
    z-index: ${theme.zIndex.mobileStepper};
    ${theme.breakpoints.down("sm")} {
      right: 0;
    }
    ${theme.breakpoints.down("xs")} {
      right: -100px;
      bottom: -100px;
    }
  `}
`;
