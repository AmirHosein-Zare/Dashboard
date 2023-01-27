import React from 'react'
import './WidgetSm.css'
import WidgetSmItem from './WidgetSmItem/WidgetSmItem';
import { users } from '../../datas';

export default function WidgetSm() {
  return (
    <div className='WidgetSm'>
        <span className='WidgetSmTitle'>New User Joined</span>
        {users.map(user => (
            <WidgetSmItem key={user.id} {...user}/>
        ))}
    </div>
  )
}
