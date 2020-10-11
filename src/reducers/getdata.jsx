import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR, GET_DIVISIONAL_DATA } from "../types";

const initialState = {
    data: [],
    p4pFighters: [],
    champsByDivision:[],
    error: ""
};


const FighterRankingsReducer = (state = initialState, action) => {
       console.log(state.data)
    switch(action.type) {
            case GET_DATA_REQUEST:
             if(action.payload){
                return {
                    ...state,
                    p4pFighters: [  
                        ...action.payload.p4pFighters
                    ],
                    error: ""
                    }
             }            
                case GET_DIVISIONAL_DATA:
                
                    if(action.payload){
                    return {
                        ...state,
                        champsByDivision: [

                            ...action.payload.champsByDivision
                        ],
                        error: ""
                }
            }
            case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: ""
                }
            case GET_DATA_ERROR:
            return {
                ...state,
                data:[],
                error: "error getting data, check API"
                }
            default:
                return initialState;
        }
}

export default FighterRankingsReducer