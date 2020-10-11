import React, { useEffect } from "react";
import { connect } from "react-redux";
import FooterPage from "./FooterPage.jsx";
import ItemDisplayCard from "./ItemDisplayCard.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import { getItems } from "../actions/posts.jsx";

// some notes
const BrowseItemsPage = (props) => {

    const  {posts, getItems} = props
    

    useEffect(()=>{
        getItems()
    },[])
    
    return (

        <div>
            <Navbar />
            <Link to="/">Home</Link>
            <p>this the the page where you can broswe items and chose items to buy</p>
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

export default connect(mapStateToProps,mapDispatchToProps)(BrowseItemsPage)
