"use client";
import { Box,  Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { fetchFromApi } from "@/app/utisl/fetchFromApi";
import Videos from "@/app/Youtubecomponent/Videos";

const Searchfeed = ({params}) => {
    const [videos,setVideos]=useState([]);
    console.log(params);
    const {term}=params;

    const getdata =async()=>{
      const data =await fetchFromApi(`search?part=snippet&q=${term}`);
      setVideos(data.items);
    }

    useEffect(() => {
        getdata();
    }, [term])
    


  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2,background:'#000'}}>
    <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{color:'white'}}>
        Search Results for:<span style={{color:'#F31503'}}>{term}</span>Videos
    </Typography>
       <Videos videos={videos}/>
  </Box>
  );
};

export default Searchfeed;
