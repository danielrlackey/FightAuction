import axios from "axios";
import { GET_DATA_REQUEST, GET_DIVISIONAL_DATA } from "../types";

// GET_DATA_SUCCESS, GET_DATA_ERROR



export const fighterRankingsData = () => {
  const baseUrl = "http://localhost:5000"

   return{
       type: GET_DATA_REQUEST,
       payload: axios.get(baseUrl + "/rankings" )
    .then((res)=>{
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