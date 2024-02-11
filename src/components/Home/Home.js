import Header from "./Header";
import React from "react";
import {Box} from "@mui/material";
import Content from "./Content";


const Home = () => {
    return (
        <Box sx={{backgroundColor: 'secondary.main', height: '100vh'}}>
            <Header/>
            <Content/>
        </Box>
    )
}

export default Home