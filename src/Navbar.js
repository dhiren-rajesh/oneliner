import React from 'react'
import './Navbar.css'
import NavbarOption from './NavbarOption';
import logo from './OL.png'
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import BusinessIcon from '@material-ui/icons/Business';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

export default function Navbar() {
    var styles = {color:'lightgrey', fontSize : '2rem'}
    return (
        <div className="nav">
            <div>
                <a href="/">
                    <img alt="logo" src={logo} className="icon"/>
                </a>
                <SearchIcon style={{color:'lightgrey', fontSize : '2rem', paddingLeft: '1rem', paddingBottom: '0.5rem'}}/>
            </div>
            <div className="nav-comp">
                <NavbarOption active Icon={HomeIcon}/>
                <NavbarOption Icon={TvIcon}/>
                <NavbarOption Icon={BusinessIcon}/>
                <NavbarOption Icon={GroupWorkIcon}/>
                <NavbarOption Icon={VideogameAssetIcon}/>
            </div>
            <div className="nav-comp">
                <AppsIcon className="nav-item" style={styles}/>
                <ChatIcon className="nav-item" style={styles}/>
                <NotificationsActiveIcon className="nav-item" style={styles}/>
                <ArrowDropDownIcon className="nav-item" style={styles}/>
            </div>
        </div>
    )
}
