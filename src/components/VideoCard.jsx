import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "./utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "10px",
        fontFamily:'Roboto'
      }}
    >
      <Link to={videoId ? `video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 170 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "76px" }}>
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
          <Typography variant="subtitle1 " fontWeight="bold" color="#fff" >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <br></br>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : `/video/cV2gBU6hKfY`
          }
        >
          <Typography variant="subtitle2 " color="gray">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
