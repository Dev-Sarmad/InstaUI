import React from "react";
import {  Box } from "@mui/material";
import Post from "./Post";


function feed() {
  return (
    <Box bgcolor="green" flex={5}>
      <Post />
    </Box>
  );
}

export default feed;
