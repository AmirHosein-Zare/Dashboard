import React from 'react'
import './Analytics.css'

export default function Analytics(props) {
  return (
    <div className='AnalyticContainer'>
        <span className='AnalyticsTitle'>{props.name}</span>
        <div className="AnalyticsPriceContainer">
            <div className='AnalyticsPrice'>
                <div className="AnalyticsMoney">
                    ${props.price}
                </div>
                <div className="Analys">
                    {props.value}
                    {props.icon}
                </div>
            </div>
            <span className='Analytics-footer'>Compared To Last Month</span>
        </div>
    </div>
  )
}
