import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import BrowseItemsPage from "../components/BrowseItemsPage.jsx";
import HomePage from "../components/HomePage.jsx";
import NewsAndRankings from "../components/NewsAndRankingsPage.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import SellItemPage from "../components/SellItemPage.jsx";




const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/browse-items" component={BrowseItemsPage}/>
                <Route path="/sell-items" component={SellItemPage}/>
                <Route path="/rankings" component={NewsAndRankings}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
    
);

export default AppRouter;