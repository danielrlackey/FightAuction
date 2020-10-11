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
        <Paper>
            <Link 
            to="rankings"
            className={classes.link}
            >    
            <h1 className={title}>{title}</h1>                
            </Link>
            {rankings && rankings.map((ranking) => {
                return(
                    <ul>
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