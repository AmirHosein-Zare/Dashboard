import React from 'react'
import './Sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <div className="sidebarMenu">
                <h5 className="sidebarTitle">Dashboard</h5>
                <ul className="sidebarList">
                    <Link to='/' className='link'>
                        <li className="sidebarItem active">
                            <LineStyleIcon className='sidebarIcon'/>
                            Home
                        </li>
                    </Link>
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
            <div className="sidebarMenu">
                <h5 className="sidebarTitle">Quick Menu</h5>
                <ul className="sidebarList">
                    <Link to='/users' className='link'>
                        <li className="sidebarItem">
                            <PermIdentityIcon className='sidebarIcon'/>
                            Users
                        </li>
                    </Link>
                    <Link to='/newuser' className='link'>
                        <li className="sidebarItem">
                            <PermIdentityIcon className='sidebarIcon'/>
                            New User
                        </li>
                    </Link>
                    <Link to='/products' className='link'>
                        <li className="sidebarItem">
                            <StorefrontIcon className='sidebarIcon'/>
                            Products
                        </li>
                    </Link>
                    <li className="sidebarItem">
                        <AttachMoneyIcon className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarItem">
                        <BarChartIcon className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h5 className="sidebarTitle">Notifications</h5>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <MailOutlineIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarItem">
                        <DynamicFeedIcon className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarItem">
                        <ChatBubbleOutlineIcon className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h5 className="sidebarTitle">Staff</h5>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <WorkOutlineIcon className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarItem">
                        <TimelineIcon className='sidebarIcon'/>
                        Analitics
                    </li>
                    <li className="sidebarItem">
                        <ReportGmailerrorredIcon className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
