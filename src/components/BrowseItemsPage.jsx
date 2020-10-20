import React, { useEffect } from "react";
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

    // possibly add get items to props
    const  {posts, classes,} = props
    

    useEffect((props)=>{
        props.getItems()
    },[])
    
    return (

        <div className={classes.root}>
            <Navbar />
                <div className={classes.header}>
                    <h1>Browse and buy fight memorabilia</h1>
                    
                </div>
                        <Grid 
                        container 
                        spacing={1}
                        direction="row"
                        alignContent="center"
                        >
                        
                            {posts && posts.userPosts && posts.userPosts.map((post)=>{
                            return(
                                <Grid container item xs={12} md={6} lg={4}>
                                    <ItemDisplayCard 
                                        itemDescription={post && post.itemDescription}
                                        askingPrice={post && post.askingPrice}
                                        itemDetails={post && post.itemDetails}
                                        pictures={post && post.pictures}
                                    />
                                </Grid>
                                )
                                })}
                      
                    </Grid>
            
                
             
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

