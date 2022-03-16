import React from 'react';
import "./topbar.css";

import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className='logo'>Observability Dashboard</span>
                </div>
                <div className="topRight">
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}