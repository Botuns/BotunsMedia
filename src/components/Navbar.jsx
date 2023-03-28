import React, { useState } from 'react';
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import img from '/Users/TOSHIBA/Desktop/MY REACT PROJECT/my_youtube_clone-app/src/components/Blue and White Modern Media Logo.png'
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={img} alt="logo" style{{
        width:'100%',
        height:'100%',
      }} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
