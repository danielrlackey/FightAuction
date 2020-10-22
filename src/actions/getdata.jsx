import axios from "axios";
import { GET_DATA_REQUEST, GET_DIVISIONAL_DATA, GET_UFCP4P_DATA, GET_UFC_DIVISIONS } from "../types";

// GET_DATA_SUCCESS, GET_DATA_ERROR



export const fighterRankingsData = () => {
  const baseUrl = "http://localhost:5000"

   return{
       type: GET_DATA_REQUEST,
       payload: axios.get(baseUrl + "/rankings" )
    .then((res)=>{
        console.log(res.data, "from the action")
        return res.data
    })
    .catch((err=>{
        console.log(err,'uhoh something went wrong :(')
    }))
   }
};


export const fighterDivisionalRankingsData = () => {
    const baseUrl = "http://localhost:5000"

     return{
         type: GET_DIVISIONAL_DATA,
         payload: axios.get(baseUrl + "/rankings/divisions" )
      .then((res)=>{
          return res.data
      })
      .catch((err=>{
          console.log(err,'uhoh something went wrong :(')
      }))
     }
  };

  
  export const ufcP4pData = () => {
      const baseUrl = "http://localhost:5000"
     
      return {
          type: GET_UFCP4P_DATA,
          payload: axios.get(baseUrl + "/rankings/divisions/ufcp4p")
          .then((res)=>{ 
            return res.data
          })
          .catch((err=>{
            console.log(err,'ufc data')
          }))
      }
  };


  export const ufcDivisions = () => {
    const baseUrl = "http://localhost:5000"
   
    return {
        type: GET_UFC_DIVISIONS,
        payload: axios.get(baseUrl + "/rankings/divisions/ufcp4p/ufcdivisions")
        .then((res)=>{ 
            console.log(res.data, "hello!!!")
          return res.data
        })
        .catch((err=>{
          console.log(err,'ufc data')
        }))
    }
};