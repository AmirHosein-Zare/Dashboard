import React from 'react'
import './Home.css'
import Feature from '../../components/Feature/Feature'
import Chart from '../../components/Chart/Chart'
import {xAxisData} from './../../datas'
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
      <Feature />
      <Chart title='Month Sale' data={xAxisData} dataKey='Sale' aspectUser={4}/>
      <div className='homeWidget'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
