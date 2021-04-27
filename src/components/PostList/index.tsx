import React from "react";
import { List } from "@material-ui/core";

import { IPost } from "../../utils/getStaticQuery";
import PostItem from "./PostItem";

interface Props {
  list: IPost[];
}

const PostList = ({ list }: Props) => (
  <List>
    {list.map(item => (
      <PostItem {...item} onClick={() => console.log(item.id)} key={item.id} />
    ))}
  </List>
);

export default PostList;
