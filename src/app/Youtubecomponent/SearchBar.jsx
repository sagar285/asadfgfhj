"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

  const [searchterm, setsearchterm] = useState("")
  const router =useRouter();



  const handlesubmit =(e)=>{
    e.preventDefault();
    if(searchterm){
      router.push(`/search/${searchterm}`);
      setsearchterm('')
    }

  }


  return (
    <div>
      <Paper
        component={"form"}
        onSubmit={handlesubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar text-black"
          placeholder="search..."
          value={searchterm}
          onChange={(e) =>setsearchterm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
