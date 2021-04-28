import styled, { css } from "styled-components";
import { List, ListItem } from "@material-ui/core";

export const MuiList = styled(List)`
  ${({ theme }) => css`
    ${theme.breakpoints.up("sm")} {
      &.MuiList-padding {
        padding-top: 40px;
      }
    }
  `}
`;

export const MuiListItem = styled(ListItem)`
  flex-direction: column;
  &:not(:last-child) {
    border-bottom: solid 1px;
  }
`;
