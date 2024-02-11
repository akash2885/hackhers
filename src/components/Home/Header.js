import {AppBar, styled, Typography} from "@mui/material";
import React from "react";

const Header = () => {


    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
    return (
        <React.Fragment>
        <AppBar>
            <Typography variant={'h3'} sx={{margin: 'auto'}}>
                HackHers Finance
            </Typography>
        </AppBar>
            <Offset/>
        </React.Fragment>
    )
}

export default Header