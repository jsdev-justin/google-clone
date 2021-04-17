import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';
import {FaNewspaper} from "react-icons/fa"
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ImageIcon from '@material-ui/icons/Image';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Nav = () => {
    return (
        <div className="nav flex">
            <div className="flex align-end flex-one">
        <h5 className="flex hover-blue"><SearchIcon className='nav-icon'/>All</h5>
        <h5 className="flex hover-blue"><BookIcon/>Books</h5>
        <h5 className="flex hover-blue"><FaNewspaper/>News</h5>
        <h5 className="flex hover-blue"><OndemandVideoIcon/>Videos</h5>
        <h5 className="flex hover-blue"><ImageIcon/>Images</h5>
        <h5 className="flex hover-blue"><MoreVertIcon/>More</h5>
            </div>
            <div className="flex flex-one">
                <h5>Settings</h5>
                <h5>Tools</h5>
            </div>
            <div className="flex flex-one">
                <h5>Selections</h5>
                <h5>Safe Search</h5>
            </div>
        </div>
    )
}

export default Nav
