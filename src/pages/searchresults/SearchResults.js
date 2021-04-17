import React, {useContext, useEffect} from 'react'
import {GlobalContext} from "../../context/GlobalState"
import {useGoogle} from "../../useGoogle.js"
import {Header,Nav,Results,InfoBar} from "./components"

const SearchResults = () => {
    const {query} = useContext(GlobalContext)
    const {searchData,searchInfo} = useGoogle(query)
    console.log(searchInfo)

    useEffect(()=>{
        if(!query){
            window.location="/"
        }
    },[])

    return (
        <div className="app">
            <Header/>
            <Nav/>
            <InfoBar searchInfo={searchInfo}/>
            <Results searchItems = {searchData}/>
        </div>
    )
}

export default SearchResults
