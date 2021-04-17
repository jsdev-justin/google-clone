import React, {useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = ({searchQuery}) => {
    const [query, setQuery] = useState("")


    const enterQuery = (e)=>{
        if(e.key === "Enter"){
            searchQuery(query)
        }
    }


    return (
        <div onKeyDown={(e)=>enterQuery(e)} className="search-form">
            <div className="form-control">
                <label htmlFor="query"><SearchIcon className='icon'/></label>
               <input className='input-box' type="text" name="query" value={query} placeholder="Search" onChange={(e)=>setQuery(e.target.value)}/>
            </div>

            <div className="flex center">
                <button onClick={()=>searchQuery(query)} className="btn">Google Search</button>
                <button className="btn">I'm Feeling Lucky</button>
            </div>
        </div>
    )
}

export default SearchInput
