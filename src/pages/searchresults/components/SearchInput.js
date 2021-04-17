import React, {useContext,useState} from 'react'
import {GlobalContext} from "../../../context/GlobalState"
import SearchIcon from '@material-ui/icons/Search';


const SearchInput = () => {
    const [newquery, setNewQuery] = useState("")
    const {query,search_query} = useContext(GlobalContext)

    const enterQuery=(e)=>{
        if(e.key === "Enter"){
        console.log("placeholder fx", newquery)
         search_query(newquery)
        }
    }
    return (
    
        <div onKeyDown={(e)=>enterQuery(e)} className="header-search-form">
            <div className="header-form">
                <label htmlFor="query"><SearchIcon className='header-icon'/></label>
               <input className='input-box' type="text" name="query" value={newquery} placeholder={`Results for ${query}`} onChange={(e)=>setNewQuery(e.target.value)}/>
            </div> 
        </div>
    )
}

export default SearchInput
