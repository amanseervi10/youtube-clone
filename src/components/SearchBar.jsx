import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

  const [searchTerm, setsearchTerm]= useState('');
  const navigate=useNavigate();

  const submitHandler=(e)=>{
    e.preventDefault();

    if(searchTerm){
      navigate(`search/${searchTerm}`);
      setsearchTerm('');
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        p1: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {setsearchTerm(e.target.value)}}
        style={{fontFamily:'Roboto',color:'#000'}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
