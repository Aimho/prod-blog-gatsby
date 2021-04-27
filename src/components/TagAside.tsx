import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";

import { Typography, Grid, Chip } from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

import lodash from "lodash";
import getStaticQuery from "../utils/getStaticQuery";
import { isValidArray } from "../utils/checker";
import setMobileCSS from "../utils/setMobileCSS";

const StyledTag = styled.aside`
  z-index: 1100;
  position: absolute;
  top: 0;
  right: 32px;
  width: 200px;
  ${setMobileCSS(`display: none;`, 1440)}

  .MuiButtonBase-root {
    transition: background-color 0.3s;
    &:hover {
      background-color: #2085ff !important;
    }
  }
`;

interface Props {
  className?: string;
  onFadeIn?: () => void;
}

const TagAside: React.FC<Props> = ({ onFadeIn, className }) => {
  const { tagList: tags } = getStaticQuery();
  return (
    <StyledTag className={className}>
      <Grid container spacing={1} wrap="wrap" className="tags">
        <Grid item xs={12}>
          <Typography variant="subtitle1" color="primary">
            All Tag <LocalOffer fontSize={"inherit"} />
          </Typography>
        </Grid>
        {isValidArray(tags) &&
          tags.map((t, index) => {
            const opacity = 0.4 + 0.2 * t.totalCount;
            const bgColor = `rgba(32, 133, 255, ${opacity})`;
            const chipStyle = {
              backgroundColor: bgColor,
              color: "#fff",
              fontSize: "12px",
              height: "23px",
              borderRadius: "3px"
            };
            return (
              <Grid item key={index}>
                <Chip
                  size="small"
                  label={`${t.tag} (${t.totalCount})`}
                  style={chipStyle}
                  onClick={() => {
                    onFadeIn && onFadeIn();
                    navigate(`/tags/${lodash.kebabCase(t.tag)}`);
                  }}
                />
              </Grid>
            );
          })}
      </Grid>
    </StyledTag>
  );
};

export default TagAside;
