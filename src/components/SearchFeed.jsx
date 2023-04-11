import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchAPI } from "./utils/fetchAPI";
import {useParams} from 'react-router-dom';

const SearchFeed = ({}) => {
  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} alignItems='center' justifyContent='center' display="flex" flexDirection='column'>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
      <span style={{ color: "#FC1503" }}>Search Results For : </span>
      {searchTerm}
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
