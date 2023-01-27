import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import './Topbar.css'

export default function Topbar() {
  return (
    <div className='Topbar'>
      <div className="TopbarWrapper">

        <div className="TopbarLeft">
          <span className='TopbarLogo'>Dashboard Admin :)</span>
        </div>

        <div className="TopbarRight">

          <div className="TopbarIconContainer">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon color="action" />
            </Badge>
          </div>

          <div className="TopbarIconContainer">
            <Badge badgeContent={4} color="primary">
              <LanguageIcon color="action" />
            </Badge>
          </div>
          
          <div className="TopbarIconContainer">
            <Badge color="primary">
              <SettingsIcon color="action" />
            </Badge>
          </div>

          <div className="TopbarIconContainer">
            <img src="logo512.png" alt="" className='UserImg'/>
          </div>

        </div>
      </div>
    </div>
  )
}
