import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR, GET_DIVISIONAL_DATA, GET_UFCP4P_DATA, GET_UFC_DIVISIONS } from "../types";

const initialState = {
    data: [],
    p4pFighters: [],
    champsByDivision: [],
    ufcP4pFighters: [],
    ufcChamps: [],
    error: ""
};


const FighterRankingsReducer = (state = initialState, action) => {
   
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
             }break;

            case GET_DIVISIONAL_DATA:
                if(action.payload){
                    return {
                        ...state,
                        champsByDivision: [
                            ...action.payload.champsByDivision
                        ],
                        error: ""
                    }
            }break;

            case GET_UFCP4P_DATA: 
                if(action.payload){
                    return{
                        ...state,
                        ufcP4pFighters: [  
                            ...action.payload.ufcP4pfighters
                        ],
                        error: "error from ufc data"
                }
            }break;

            case GET_UFC_DIVISIONS: 
                if(action.payload){
                    return{
                        ...state,
                        ufcChamps: [
                            ...action.payload.ufcChamps
                        ],
                        error: "error from ufc data"
                }
            }break;
            
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