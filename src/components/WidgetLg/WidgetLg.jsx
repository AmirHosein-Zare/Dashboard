import React from 'react'
import './WidgetLg.css'

export default function WidgetLg() {
  
    const Button = ({type}) => {
        return <button className={'WidgetLgBtn ' + type}>{type}</button>
    }
  
    return (
    <div className='WidgetLg'>
        <h3 className='WidgetLgTitle'>Lastest Transactios</h3>
        <table className="WidgetLgTable">
            <tr className="WidgetLgTr">
                <th className="WidgetLgTh">Customer</th>
                <th className="WidgetLgTh">Date</th>
                <th className="WidgetLgTh">Amount</th>
                <th className="WidgetLgTh">Status</th>
            </tr>
            <tr>
                <td className='WidgetLgTd WidgetLgUser'>
                    <img src="logo512.png" className='WidgetLgImg'/>
                    <span>Qadir Yolme</span>
                </td>
                <td className='WidgetLgDate WidgetLgTd'>2 May 2023</td>
                <td className='WidgetLgPrice WidgetLgTd'>$199.95</td>
                <td className='WidgetLgStatus WidgetLgTd'>
                    <Button type="Approved" />
                </td>
            </tr>
            <tr>
                <td className='WidgetLgTd WidgetLgUser'>
                    <img src="logo512.png" className='WidgetLgImg'/>
                    <span>Qadir Yolme</span>
                </td>
                <td className='WidgetLgDate WidgetLgTd'>2 May 2023</td>
                <td className='WidgetLgPrice WidgetLgTd'>$199.95</td>
                <td className='WidgetLgStatus WidgetLgTd'>
                    <Button type="Pending" />
                </td>
            </tr>
            <tr>
                <td className='WidgetLgTd WidgetLgUser'>
                    <img src="logo512.png" className='WidgetLgImg'/>
                    <span>Qadir Yolme</span>
                </td>
                <td className='WidgetLgDate WidgetLgTd'>2 May 2023</td>
                <td className='WidgetLgPrice WidgetLgTd'>$199.95</td>
                <td className='WidgetLgStatus WidgetLgTd'>
                    <Button type="Decilned" />
                </td>
            </tr>
            <tr>
                <td className='WidgetLgTd WidgetLgUser'>
                    <img src="logo512.png" className='WidgetLgImg'/>
                    <span>Qadir Yolme</span>
                </td>
                <td className='WidgetLgDate WidgetLgTd'>2 May 2023</td>
                <td className='WidgetLgPrice WidgetLgTd'>$199.95</td>
                <td className='WidgetLgStatus WidgetLgTd'>
                    <Button type="Pending" />
                </td>
            </tr>
        </table>
    </div>
  )
}
