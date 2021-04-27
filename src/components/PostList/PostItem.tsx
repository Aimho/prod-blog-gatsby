import React from "react";
import { ListItem, ListItemText, Chip, Grid } from "@material-ui/core";
import { IPost } from "../../utils/getStaticQuery";

interface Props extends IPost {
  onClick: () => void;
}

const PostItem = (props: Props) => (
  <ListItem alignItems="flex-start" style={{ flexDirection: "column" }}>
    <ListItemText primary={props.title} secondary={props.createdAt} />
    <Grid container spacing={1}>
      {props.tags.map((tag, index) => (
        <Grid item key={index}>
          <Chip label={`#${tag}`} color="primary" size="small" />
        </Grid>
      ))}
    </Grid>
  </ListItem>
);

export default PostItem;
