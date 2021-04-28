import React from "react";
import { navigate } from "gatsby";
import {
  ListItemText,
  Chip,
  Grid,
  Typography,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { IPost } from "../../utils/getStaticQuery";
import { MuiListItem } from "./style";

interface Props extends IPost {
  onClick: () => void;
}

const PostItem = (props: Props) => {
  const theme = useTheme();
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));

  const ListTextPrimary = () => (
    <Typography color="textSecondary" variant="caption" component="span">
      {props.createdAt}
    </Typography>
  );

  const ListTextSecondary = () => (
    <React.Fragment>
      <Typography
        color="primary"
        component="span"
        variant="subtitle1"
        style={{ display: "block" }}
      >
        {props.title}
      </Typography>
      <Typography variant="caption" component="span">
        {props.description}
      </Typography>
    </React.Fragment>
  );

  const ListTag = () => {
    if (matchXS) return null;
    return (
      <Grid container spacing={1}>
        {props.tags.map((tag, index) => (
          <Grid item key={index}>
            <Chip label={`#${tag}`} color="primary" size="small" />
          </Grid>
        ))}
      </Grid>
    );
  };

  const onClick = () => navigate(`/${props.slug}`);

  return (
    <MuiListItem button onClick={onClick} alignItems="flex-start">
      <ListItemText
        primary={<ListTextPrimary />}
        secondary={<ListTextSecondary />}
      />
      <ListTag />
    </MuiListItem>
  );
};

export default PostItem;
