import React, {useState, useContext} from 'react'
import {GlobalContext} from "../../context/GlobalState"
import {Header, Label, SearchInput} from "./components"


const Home = (props) => {
    // const [query, setQuery] = useState("")
    const {search_query} = useContext(GlobalContext)

    const searchQuery = (query) =>{
        console.log("Query: " + query)
        search_query(query)
        if(query){
        props.history.push("/results")
        }
    }
    return (
        <div className="app">
            <div className="container">
                 <Header/>
                 <div className="flex column">
                <Label/>
                <SearchInput searchQuery={searchQuery}/>
                </div>
            </div>
        </div>
    )
}

export default Home
