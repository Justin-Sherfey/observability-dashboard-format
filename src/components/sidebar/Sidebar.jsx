import React from 'react';
import "./sidebar.css";

import HomeIcon from '@mui/icons-material/Home';
import ErrorIcon from '@mui/icons-material/Error';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className='sidebarMenu'>
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <HomeIcon/>
                            Dashboard
                        </li>    
                        <li className='sidebarListItem'>
                            <ErrorIcon/>
                            Incidents
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}