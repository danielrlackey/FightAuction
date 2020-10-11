import {POST_ITEM, GET_ITEMS} from "../types"
import Axios from "axios"

const baseUrl = "http://localhost:5000"
export const postItem = (item) =>{
    return {
        type: POST_ITEM,
        payload: Axios.post(baseUrl + "/items",{item})
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const getItems = ()=>{
    return {
        type: GET_ITEMS,
        payload: Axios.get(baseUrl + "/items")
        .then((res) => {
            console.log(res)
            return res.data
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}