import React from 'react'
import './Analytics.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Analytics(props) {
  return (
    <div className='AnalyticContainer'>
        <span className='AnalyticsTitle'>{props.name}</span>
        <div className="AnalyticsPriceContainer">
            <div className='AnalyticsPrice'>
                <div className="AnalyticsMoney">
                    <AttachMoneyIcon />
                    ${props.price}
                </div>
                <div className="Analys">
                    {props.value}
                    {props.icon}
                </div>
            </div>
            <span>Compared To Last Month</span>
        </div>
    </div>
  )
}
