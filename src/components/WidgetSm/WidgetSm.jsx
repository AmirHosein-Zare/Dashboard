import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
  return (
    <div className='WidgetSm'>
        <span className='WidgetSmTitle'>New User Joined</span>
        <div className="WidgetSmList">
            <li className="WidgetSmItem">
                <img src="logo512.png" />
                <div className="WidgetSmUser">
                    <span className='WidgetSmUserName'>Qadir Yolme</span>
                    <span className='WidgetSmUserTitle'>Hacker</span>
                </div>
                <button className='WidgetSmBtn'>
                    <VisibilityIcon className='WidgetSmIcon' />
                </button>
            </li>
        </div>
    </div>
  )
}
