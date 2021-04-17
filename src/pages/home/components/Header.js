import React from 'react'
import AppsIcon from '@material-ui/icons/Apps'
import PersonIcon from '@material-ui/icons/Person';

const Header = () => {
    return (
        <div className="header">
            <div className="flex justify-between">
                <div className="flex">
                    <h5 className="underline">About</h5>
                    <h5 className="underline">Store</h5>
                </div>
                <div className="flex">
                    <h5 className="underline">Gmail</h5>
                    <h5 className="underline">Images</h5>
                    <h5><AppsIcon/></h5>
                    <h5><PersonIcon/></h5>
                </div>
            </div>
        </div>
    )
}

export default Header
