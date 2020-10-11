import React from "react";
import FighterRankings from "./FighterRankings.jsx";
import FooterPage from "./FooterPage.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";


const NewsAndRankings = () => {


    return (
        <div>
            <Navbar/>
            <p>get the current rankings on fighters in boxing and mma</p>
            <Link to="/">Home</Link>
            <FighterRankings />
            <div>
                <FooterPage />
            </div>
        </div>
    )
};

export default NewsAndRankings;