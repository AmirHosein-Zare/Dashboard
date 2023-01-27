import React from 'react'
import './Feature.css'
import  Analytics  from './Analytics/Analytics'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { red } from '@mui/material/colors';

export default function Feature() {
  return (
    <div className="feature">
        <div className="featureItem">
            <Analytics className='featurePriceItem' name='Revanue' value={-11.4} icon={<ArrowDownwardIcon className='AnalyticsIcon'  sx={{ color: red[500] }}/>} price='2,415'/>
            <Analytics className='featurePriceItem' name='Sales' value={-1.4} icon={<ArrowDownwardIcon className='AnalyticsIcon'  sx={{ color: red[500] }}/>} price='4,415'/>
            <Analytics className='featurePriceItem' name='Costs' value={'+2.4'} icon={<ArrowUpwardIcon className='AnalyticsIcon' color='success'/>} price='2,225'/>
        </div>
    </div>    
  )
}
