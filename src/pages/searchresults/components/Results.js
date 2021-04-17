import React from 'react'
import ResultItem from "./ResultItem"


const Results = ({searchItems}) => {
    console.log(searchItems)
    return (
        <div className="container">
            {searchItems.length ? searchItems.map((item,idx)=>{
                return(
                    <ResultItem item={item}
                                 key={idx}/>
                )
            }): "No Search Results! :("}
        </div>
    )
}

export default Results
