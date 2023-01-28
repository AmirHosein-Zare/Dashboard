import React, { useState } from 'react'
import './Product.css'
import { ShowStuff } from '../../datas';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chart from './../../components/Chart/Chart'
import { SaleProducts } from '../../datas';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
                        <img src={findProduct[0].avatar} alt="Profile"/>
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
        <div className="productBottom">
            <Box className="productForm"
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >

                        <TextField className='ProductFormInput'
                          required
                          id="outlined-required"
                          label="Title"
                          defaultValue={findProduct[0].title}
                        />
                        
                            <TextField className='ProductFormInput'
                                  required
                                  id="outlined-required"
                                  label="Price"
                                  defaultValue={findProduct[0].price}
                                />

                        <FormControl className='ProductSelect'>
                            <InputLabel id="demo-simple-select-label">Action</InputLabel>
                            <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="Action"
                                  defaultValue={10}
                                >
                                <MenuItem value={10}>Yes</MenuItem>
                                <MenuItem value={20}>No</MenuItem>
                            </Select>
                        </FormControl>



                    <FormControl className='ProductSelect'>
                      <InputLabel id="demo-simple-select-label">InStock</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="InStock"
                        defaultValue={10}
                      >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>

                </Box>
        </div>
    </div>
  )
}
