import React,{ useEffect } from "react";
import FooterPage from "./FooterPage.jsx";
import HomePageHeader from "./HomePageHeader.jsx"
import HomePageImageDisplay from "../components/HomePageImageDisplay";
import Navbar from "../components/Navbar.jsx"
import {connect} from "react-redux";
import MiniRankingsList from "./MiniRankingsList";
import Grid from '@material-ui/core/Grid';
import {fighterRankingsData, fighterDivisionalRankingsData} from "../actions/getdata.jsx";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./HomePage.styles.js";

// import HomePageImageDisplay from ".components/HomePageImageDisplay.jsx";



const HomePage = (props) => {

    const {rankings, classes} = props
    

    useEffect(()=>{
        props.fighterDivisionalRankingsData()
        props.fighterRankingsData()
    },[])

    // code to duplicate below
    // const division = rankings.data.filter((rank) => rank.type == "div")
    // const p4p = rankings.data.filter((rank)=>rank.type == "p4p")


    const division = rankings.champsByDivision
    const p4p = rankings.p4pFighters

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
                    <Grid className={classes.rankCol} container item md={6}>
                        <div>
                            {p4p &&
                                <MiniRankingsList 
                                rankings={p4p}
                                title={"P4P Rankings"}
                            />
                            }
                        </div>                     
                    </Grid>
                    <Grid className={classes.rankCol} container item md={6}>
                        <div >
                            {division &&
                                <MiniRankingsList 
                                rankings={division}
                                title={"Divisional Rankings"}
                                />
                            }
                        </div>
                
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(HomePage));