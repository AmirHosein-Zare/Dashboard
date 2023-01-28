import React from 'react'
import './Chart.css'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

export default function Chart({title, data, dataKey, grid, aspectUser}) {
  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={aspectUser}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                {grid===true && <CartesianGrid stroke='#e0dfdf' strokeDasharray="10 10" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
