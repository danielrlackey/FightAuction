import React from "react";
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./MiniRankingsList.styles.js";

const MiniRankingsList = (props) => {
   
    const {rankings, classes, title} = props
    console.log(rankings, "hello")
    return(
        <Paper className={classes.root}>
            <Link 
            to="rankings"
            className={classes.link}
            >    
            <h2 className={classes.title}>{title}</h2>                
            </Link>
            {rankings && rankings.map((ranking) => {
                return(
                    <ul className={classes.rankingsList}>
                        <li>
                            {ranking.name}
                            {"/ "}
                            {ranking.division}
                        </li>
                    </ul>
                )
                
            })}
        </Paper>
    )
}

export default (withStyles(styles, {withTheme: true})(MiniRankingsList));