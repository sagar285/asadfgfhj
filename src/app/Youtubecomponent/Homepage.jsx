"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utisl/fetchFromApi";

const Homepage = () => {
    const [selectedCategory, setselectedCategory] = useState('New')
    const [videos,setVideos]=useState([]);

    const getdata =async()=>{
      const data =await fetchFromApi(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items);
    }

    useEffect(() => {
        getdata();
    }, [selectedCategory])
    


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" },background:'#000' }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
       <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
       <Typography className="copyright" variant="body2" sx={{mt:1.5,color:"#fff"}}>
        Copyright 2023 Simplyjs
       </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>

        <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{color:'white'}}>
            {selectedCategory}<span style={{color:'#F31503'}}>Videos</span>
        </Typography>
           
           <Videos videos={videos}/>


      </Box>


    </Stack>
  );
};

export default Homepage;
