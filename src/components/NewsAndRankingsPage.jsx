import React from "react";
import FighterRankings from "./FighterRankings.jsx";
import FooterPage from "./FooterPage.jsx";
import Navbar from "./Navbar.jsx";


const NewsAndRankings = () => {


    return (
        <div>
            <Navbar/>
            <FighterRankings
            styles={{paddingTop: 300}}
            />
            <div>
                <FooterPage />
            </div>
        </div>
    )
};

export default NewsAndRankings;