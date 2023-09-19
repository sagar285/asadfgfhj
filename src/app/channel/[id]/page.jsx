"use client";
import ChannelCard from '@/app/Youtubecomponent/ChannelCard';
import Videos from '@/app/Youtubecomponent/Videos';
import { fetchFromApi } from '@/app/utisl/fetchFromApi';
import { Box } from '@mui/material'
import React,{useState,useEffect} from 'react'

const ChannelPage = ({params}) => {
    const [channelDetail, setchannelDetail] = useState(null)
    const [videos, setvideos] = useState([])
    const id =params.id;
    console.log(channelDetail,videos)

    const channel =async()=>{
        const res =await fetchFromApi(`channels?part=snippet&id=${id}`)
        const data =await fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        setchannelDetail(res?.items[0]);
        setvideos(data?.items)
    }


    useEffect(() => {
     channel();
    }, [id])
    


  return (
    <Box minHeight={"95vh"}>
        <Box>
            <div style={{background:'linear-gradient(90deg,rgba(0,238,247,1) 0%,rgba(206,3,184,1) 100%,rgba(0,212,255,1)100%)',zIndex:'10',height:'300px'}}/>

            <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
        </Box>
        <Box display='flex' p="2">
            <Box sx={{mr:{sm:'100px'}}}/>
                 <Videos videos={videos}/>
        </Box>
    </Box>
  )
}

export default ChannelPage