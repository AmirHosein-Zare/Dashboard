import React from 'react'
import './WidgetLg.css'
import { transactions } from '../../datas'

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
            {
                transactions.map(trans => (
                    <tr key={trans.id}>
                        <td className='WidgetLgTd WidgetLgUser'>
                            <img src="logo512.png" className='WidgetLgImg'/>
                            <span>{trans.customer}</span>
                        </td>
                        <td className='WidgetLgDate WidgetLgTd'>{trans.date}</td>
                        <td className='WidgetLgPrice WidgetLgTd'>${trans.price}</td>
                        <td className='WidgetLgStatus WidgetLgTd'>
                            <Button type={trans.status} />
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}
