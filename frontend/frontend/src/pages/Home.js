import { Avatar, Grid, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostsContainer from "../components/PostsContainer";
import { useLocation } from "react-router-dom";
import pp from "../images/pp1.png";


function Home(){


return(
    <div>
    <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6} className="maincontent__container">
        <Link to="/Home/Profile">                              
                <Avatar src={pp} className="navbar__img" style={{maxWidth:"300px",maxHeight:"80px",zIndex:4}} />
        </Link>
            <div>

            <div>
                <PostsContainer/>
            </div>
            </div>
        </Grid>
    </Grid>
</div>
)
}

export default Home;