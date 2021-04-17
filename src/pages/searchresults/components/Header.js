import React from 'react'
import SearchInput from "./SearchInput"
import AppsIcon from '@material-ui/icons/Apps'


const Header = () => {
    return (
        <div className="header">
            <div className="flex justify-evenly">
                <div className="label-div flex">
                    <h5 className="letterh5 blue">G</h5>
                    <h5 className="letterh5 red">o</h5>
                    <h5 className="letterh5 yellow">o</h5>
                    <h5 className="letterh5 blue">g</h5>
                    <h5 className="letterh5 green">l</h5>
                    <h5 className="letterh5 red">e</h5>
                </div>
                <SearchInput/>
                <div className="icon-div flex">
                    <AppsIcon/>
                    <div className="user-tab">g</div>
                </div>
            </div>
        </div>
    )
}

export default Header
