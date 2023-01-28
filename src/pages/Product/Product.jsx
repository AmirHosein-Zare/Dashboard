import React, { useState } from 'react'
import './Product.css'
import { ShowStuff } from '../../datas';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chart from './../../components/Chart/Chart'
import { SaleProducts } from '../../datas';

export default function Product() {
    const [products, setProducts] = useState(ShowStuff)
    const params = useParams()
    const [chartProduct, setChartProduct] =  useState(SaleProducts)

    const findProduct = products.filter(product => product.id == params.productID)
    
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
                <Chart title="Sale In Month" grid={true} data={chartProduct} dataKey="Sale" aspectUser={2}/>
            </div>
            <div className="productTopRight">
                <div className="productInfo">
                    <div className="productInfoTop">
                        <img src="logo512.png" alt="" />
                    </div>
                    <div className="productInfoBottom" >
                        <div className="productInfoDetail">
                            <div className='productInfoKey'>
                                ID:
                            </div>
                            <div className='productInfoValue'>
                                {findProduct[0].id}
                            </div>
                        </div>
                        <div className="productInfoDetail">
                            <div className='productInfoKey'>
                                Title:
                            </div>
                            <div className='productInfoValue'>
                                {findProduct[0].title}
                            </div>
                        </div>
                        <div className="productInfoDetail">
                            <div className='productInfoKey'>
                                Price:
                            </div>
                            <div className='productInfoValue'>
                                {findProduct[0].price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
