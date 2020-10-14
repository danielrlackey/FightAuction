import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FooterPage from "./FooterPage.jsx";
import ItemDisplayCard from "./ItemDisplayCard.jsx";
import Grid from "@material-ui/core/Grid"
import Navbar from "./Navbar.jsx";
import { getItems } from "../actions/posts.jsx";

// styling imports
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./BrowseItemsPage.styles.js";

// some notes
const BrowseItemsPage = (props) => {

    const  {posts, getItems, classes,} = props
    

    useEffect(()=>{
        getItems()
    },[])
    
    return (

        <div className={classes.root}>
            <Navbar />
                <div className={classes.header}>
                    <h3>Browse and buy fight memorabilia</h3>
                </div>
                {ItemDisplayCard && ItemDisplayCard.map((card)=> {
                    return(
                        <Grid 
                        container 
                        spacing={4}
                        className={classes.displayCard}
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                        <Grid item xs={12} lg={4}>
                            {posts && posts.userPosts && posts.userPosts.map((post)=>{
                            return(
                                <ItemDisplayCard 
                                    itemDescription={post && post.itemDescription}
                                    askingPrice={post && post.askingPrice}
                                    itemDetails={post && post.itemDetails}
                                    pictures={post && post.pictures}
                                />
                                )
                                })}
                
                       
                        </Grid>
                    </Grid>
                    )
                })}
                
             
                <div>
                    <FooterPage />
                </div>
        </div>
            )
        };


const mapDispatchToProps = (dispatch) => ({
    getItems: () => dispatch(getItems())
});

function mapStateToProps({posts}) {
    return {posts}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(BrowseItemsPage));

