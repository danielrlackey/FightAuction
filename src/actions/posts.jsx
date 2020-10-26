import {POST_ITEM, GET_ITEMS} from "../types"
import Axios from "axios"

const baseUrl = "http://localhost:5000"
export const postItem = (item) =>{
    uploadPic(item)
    item.pictures = item.pictures[0].name
    return {
        type: POST_ITEM,
        payload: Axios.post(baseUrl + "/items",{item})
    }
}

export const uploadPic = (item) =>{
    if(item.pictures && item.pictures[0]){
        const formData = new FormData();
        formData.append('file', item.pictures[0])
        return {
            type: POST_ITEM,
            payload: Axios.post(baseUrl + "/upload", formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }})
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

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