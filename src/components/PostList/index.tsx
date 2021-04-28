import React from "react";

import { IPost } from "../../utils/getStaticQuery";
import PostItem from "./PostItem";
import { MuiList } from "./style";

interface Props {
  list: IPost[];
}

const PostList = ({ list }: Props) => (
  <MuiList>
    {list.map(item => (
      <PostItem {...item} onClick={() => console.log(item.id)} key={item.id} />
    ))}
  </MuiList>
);

export default PostList;
