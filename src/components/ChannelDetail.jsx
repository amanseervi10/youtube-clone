import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAPI } from "./utils/fetchAPI";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );

    fetchAPI(`search?part=snippet&channelId=${id}&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box>
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(to right top, #b9b7e8, #9a94f1, #7b6ff7, #5b47f8, #3500f6)",
            zIndex: 10,
          }}
        />
      </Box>
      <ChannelCard channel={channelDetail} marginTop="-100px"  />
      <Box display="flex" alignItems='center'>
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
