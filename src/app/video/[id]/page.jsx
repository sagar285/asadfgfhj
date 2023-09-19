"use client";
import Videos from "@/app/Youtubecomponent/Videos";
import { fetchFromApi } from "@/app/utisl/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const page = ({ params }) => {
  const { id } = params;

  const [videodetail, setvideodetail] = useState(null);
  const [videos, setvideos] = useState([]);
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false,
  });

  const playvideo = async () => {
    const data = await fetchFromApi(`videos?part=snippet,statistics&id=${id}`);
    const suggestedvideo = await fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    setvideos(suggestedvideo.items)
    setvideodetail(data.items[0]);
  };

  useEffect(() => {
    playvideo();
  }, [id]);


 

  return (
    <Box minHeight="95vh" sx={{ background: "#000" }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography sx={{color:'white'}} variant="h5" fontWeight={"bold"} p={2}>
                {videodetail?.snippet?.title}
            </Typography>
            <Stack direction={'row'} justifyContent={"space-between"}
             sx={{color:"#fff"}} py={1} px={2}
            >
                <Link href={`/channel/${videodetail?.snippet?.channelId}`}>
                <Typography variant={{sm:'subtitle1',md:'h6'}} color="#fff">
                {videodetail?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize:'12px' ,color:'gray',ml:'5px'}}/>
                    </Typography>
                </Link>
                <Stack direction={"row"} gap="20px" alignItems={"center"}>
                  <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(videodetail?.statistics?.viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(videodetail?.statistics?.likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
       <Box px={2} py={{md:1,xs:5}} justifyContent={"center"} alignItems={"center"}>
          <Videos videos={videos} direction="column"/>
       </Box>
      </Stack>
    </Box>
  );
};

export default page;
