import React, { useState } from 'react'
import './Product.css'
import { ShowStuff } from '../../datas';
import { useRoutes } from 'react-router-dom';

export default function Product() {
    const [products, setProducts] = useState(ShowStuff)
    const productId = useRoutes('productID')


  return (
    <div className='Product'>

    </div>
  )
}
