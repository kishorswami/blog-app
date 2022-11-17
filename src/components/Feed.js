import React from "react";
import { Box } from "@mui/material";
import PostItem from "./PostItem";
import ListOfFeeds from "./ListOfFeeds";

const Feed = () => {
  return (
    <Box flex={4} p={2} >
      {ListOfFeeds.map((item, index) => (
        <PostItem item={item} index={index} />
      ))}
    </Box>
  );
};

export default Feed;