import React from "react";
import FooterPage from "./FooterPage.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import SellItemForm from "./SellItemForm.jsx";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./SellItemPage.styles.js"

const SellItemPage = (props) => {

    const { classes } = props

    return (
        <div className={classes.background}>
            <Navbar />
            <div className={classes.header}>
                <h1>Upload your memoribilia here.</h1>
            </div>
            <div className={classes.form}>
                <SellItemForm
                    className={classes.mainForm}
                 />
            </div>
            
            <FooterPage />
        </div>
    );
}

export default (withStyles(styles, {withTheme: false})(SellItemPage));