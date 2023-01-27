import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <div className="sidebarMenu">
                <h5 className="sidebarTitle">Dashboard</h5>
                <ul className="sidebarList">
                    <li className="sidebarItem active">
                        <LineStyleIcon className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarItem">
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarItem">
                        <TrendingUpIcon className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
