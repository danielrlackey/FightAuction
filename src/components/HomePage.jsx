import React,{ useEffect } from "react";
import FooterPage from "./FooterPage.jsx";
import HomePageHeader from "./HomePageHeader.jsx"
import HomePageImageDisplay from "../components/HomePageImageDisplay";
import Navbar from "../components/Navbar.jsx"
import {connect} from "react-redux";
import MiniRankingsList from "./MiniRankingsList";
import Grid from '@material-ui/core/Grid';
import {fighterRankingsData, fighterDivisionalRankingsData, ufcP4pData, ufcDivisions} from "../actions/getdata.jsx";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./HomePage.styles.js";

// import HomePageImageDisplay from ".components/HomePageImageDisplay.jsx";



const HomePage = (props) => {

    const { rankings, classes, ufcDivisions, ufcP4pData, fighterDivisionalRankingsData, fighterRankingsData } = props
    
    console.log(rankings.data,"from the home page")

    useEffect(()=>{
        fighterDivisionalRankingsData()
        fighterRankingsData()
        ufcP4pData()
        ufcDivisions()
    },[])

    
    
    
    // code to duplicate below
    // const division = rankings.data.filter((rank) => rank.type == "div")
    // const p4p = rankings.data.filter((rank)=>rank.type == "p4p")


    const division = rankings.champsByDivision
    const p4p = rankings.p4pFighters
    const ufcp4p = rankings.ufcP4pFighters
    const ufcDivisionalChamps = rankings.ufcChamps 

    return (
        <div className={classes.background}>
            <div>
                <Navbar />
                <HomePageHeader />
                {/* todo - image timer */}
                <div className={classes.picRow}>
                        <HomePageImageDisplay/>
                    </div>
                <hr className={classes.hrHead}/>
                
                    <Grid  container>
                        <Grid container item md={6}>
                            <h1 className={classes.boxingtitle}>Boxing Rankings</h1>
                        </Grid>
                        <Grid container item md={6}>
                            <h1 className={classes.ufctitle}>UFC Rankings</h1>
                        </Grid>
                        <Grid className={classes.rankCol} container item md={6}>
                            <div className={classes.box1}>
                                {p4p &&
                                    <MiniRankingsList 
                                        rankings={p4p}
                                        title={"P4P Rankings"}
                                    />
                                 }
                            </div> 
                            <div>
                                {p4p &&
                                    <MiniRankingsList 
                                        rankings={division}
                                        title={"Divisional Rankings"}
                                    />
                                 }
                            </div>               
                        </Grid>
                        
                        <Grid className={classes.rankCol} container item md={6}>
                            <div>
                                {p4p &&
                                    <MiniRankingsList 
                                        rankings={ufcp4p}
                                        title={"UFC P4P Rankings"}
                                    />
                                 }
                            </div>  
                            {/* <div>
                                {ufcDivisionalChamps &&
                                    <MiniRankingsList 
                                        rankings={ufcDivisionalChamps}
                                        title={"Divisional Rankings"}
                                    />
                                 }
                            </div>                           */}
                        </Grid>   
                    </Grid>          
                <FooterPage />
            </div> 
        </div>
    )
};

const mapStateToProps = ({rankings}) => {
    return {rankings}
}

const mapDispatchToProps = (dispatch) => ({
    fighterRankingsData: (data) => dispatch(fighterRankingsData(data)),
    fighterDivisionalRankingsData: (data) => dispatch(fighterDivisionalRankingsData(data)),
    ufcP4pData: (data) => dispatch(ufcP4pData(data)),
    ufcDivisions: (data) => dispatch(ufcDivisions(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(HomePage));