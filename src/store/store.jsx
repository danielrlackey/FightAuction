import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from 'redux-promise';

// reducers
import ItemReducer from "../reducers/posts.jsx";
import FighterRankingsReducer from "../reducers/getdata.jsx";

export default () => {
    const rootReducer = combineReducers({
            rankings: FighterRankingsReducer,
            posts: ItemReducer,
    });
    const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

    return store;
};
