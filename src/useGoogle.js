import React, {useState, useEffect} from "react"
import {API_KEY} from "./keys.js"
import axios from "axios"


// const ENGINE_ID = `354a746bf3c270d14`
const ENGINE_ID = `6da68d082baccf19a`
const GOOGLE_URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=`


export const useGoogle =(query) =>{
    const [searchData, setSearchData] = useState([])
    const [searchInfo, setSearchInfo] = useState({})

    console.log('useQuery : ' + query)
    useEffect(()=>{
        if(!query)return;

        axios.get(`${GOOGLE_URL}${query}`)
        .then(res=>{
            console.log(res.data)
             setSearchData(res.data.items)
             setSearchInfo(res.data.searchInformation)
             console.log(searchData)
            })
        
     },[query])



    return {searchData,searchInfo};
}