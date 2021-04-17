import React from 'react'
import NumberFormat from 'react-number-format';

const InfoBar = ({searchInfo}) => {
    return (
        <div>
            <h5>About<NumberFormat value={searchInfo.totalResults} className="foo" displayType={'text'} thousandSeparator={true} renderText={(value, props) => <span {...props}>{value} </span>} />
 results ({searchInfo.formattedSearchTime} seconds)</h5>
        </div>
    )
}

export default InfoBar
