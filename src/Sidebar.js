import React from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import BusinessIcon from '@material-ui/icons/Business';
import TvIcon from '@material-ui/icons/Tv';
import EventIcon from '@material-ui/icons/Event';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';

export default function Sidebar() {
    return (
        <div className="side-comp">
            <div className="side-item">
                <AccountCircleIcon className="side-icon"/>
                Profile
            </div>
            <div className="side-item">
                <PeopleIcon className="side-icon"/>
                Friends
            </div>
            <div className="side-item">
                <GroupWorkIcon className="side-icon"/>
                Groups
            </div>
            <div className="side-item">
                <BookmarkIcon className="side-icon"/>
                Saved
            </div>
            <div className="side-item">
                <FlagIcon className="side-icon"/>
                Pages
            </div>
            <div className="side-item">
                <EventIcon className="side-icon"/>
                Events
            </div>
            <div className="side-item">
                <WatchLaterIcon className="side-icon"/>
                Memories
            </div>
            <div className="side-item">
                <BusinessIcon className="side-icon"/>
                Marketplace
            </div>
            <div className="side-item">
                <TvIcon className="side-icon"/>
                Watch
            </div>
        </div>
    )
}
