import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ResultItem = ({item}) => {
    return (
        <div className="result-item">
            <div className="flex">
            <h5>{item.formattedUrl}</h5>
            <MoreVertIcon/>
            </div>
            <a href="#"><h1>{item.title}</h1></a>
            <p>{item.snippet}</p>
            
        </div>
    )
}

export default ResultItem
