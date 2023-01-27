import React from 'react'
import './WidgetSm.css'
import WidgetSmItem from './WidgetSmItem/WidgetSmItem';

export default function WidgetSm() {
  return (
    <div className='WidgetSm'>
        <span className='WidgetSmTitle'>New User Joined</span>
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
        <WidgetSmItem />
    </div>
  )
}
