import {GET_ITEMS} from "../types"
const ItemReducerDefaultState = {
    userPosts: []
};

const ItemReducer = (state = ItemReducerDefaultState, action) => {

    switch (action.type) {
        case GET_ITEMS:
            console.log(action.payload)
            return {
                ...state,
                userPosts:[
                    ...state.userPosts,
                    ...action.payload
                ]
            };
            default:
                return state
    
    }
}

export default ItemReducer;