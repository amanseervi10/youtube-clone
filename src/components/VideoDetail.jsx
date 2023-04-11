import React from "react";
import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchAPI } from "./utils/fetchAPI";
import {Videos} from './'

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography, Box, Stack } from "@mui/material";

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });

    fetchAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`).then(
      (data) => {
        setVideos(data.items);
      }
    );
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;
  return (
    <Box minHeight="90vh">
      <Stack direction={{ xs: "column", md: "row" }} overflowY='scroll'>
        <Box flex={1} width='70%'>
          <Box sx={{ position :"sticky", width: "100%", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography color="#fff" fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row'  justifyContent="space-between" gap='20px'>
                <Link to={`/channel/${channelId}`}>
                  <Typography color='#fff' >
                    {channelTitle}
                    <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                    <Typography color='#fff' >
                      {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography color='#fff' >
                      {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" width='30%' >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
