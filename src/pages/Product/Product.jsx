import React, { useState } from 'react'
import './Product.css'
import { ShowStuff } from '../../datas';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chart from './../../components/Chart/Chart'

export default function Product() {
    const [products, setProducts] = useState(ShowStuff)
    const productId = useParams('productID')


  return (
    <div className='Product'>

        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/products" className='link'>
                <Button variant="contained">Create</Button>
            </Link>
        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Chart title="Sale In Month" grid={true} data={} dataKey="Sale"/>
            </div>
            <div className="productTopRight">

            </div>
        </div>
    </div>
  )
}
