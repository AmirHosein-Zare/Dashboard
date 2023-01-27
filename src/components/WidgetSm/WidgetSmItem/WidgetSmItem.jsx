import React from 'react'
import './WidgetSmItem.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSmItem(props) {
  return (
    <div>
        <ul className="WidgetSmList">
            <li className="WidgetSmItem">
                <img src={props.img} className='WidgetSmImg'/>
                <div className="WidgetSmUser">
                    <span className='WidgetSmUserName'>{props.name}</span>
                    <span className='WidgetSmUserTitle'>{props.job}</span>
                </div>
                <button className='WidgetSmBtn'>
                    <VisibilityIcon className='WidgetSmIcon' />
                </button>
            </li>
        </ul>
    </div>
  )
}
