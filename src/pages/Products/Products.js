import React, {useState} from 'react'
import { ShowStuff } from '../../datas';
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Products() {

    const [products, setProducts] = useState(ShowStuff)

    //Delete Event
    const DeleteHandler = (id) => {
      setProducts(products.filter(product => product.id != id))
    }

    //data Grid Column
    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
          field: 'title',
          headerName: 'Title',
          width: 200,
          renderCell: (params) => {
            return(
              <Link to='/' className='UserListLink'>
                <div className="UserListUser">
                  <img src={params.row.avatar} className="UserListImg"/>
                  {params.row.title}
                </div>
              </Link>
            )
          }
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 100,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
            return(
              <>
                <Link to={`/products/${params.row.id}`}  className='UserListAction'>
                  <button className='UserListEdit'>
                    <EditIcon className='UserListEditIcon' />
                  </button>
                </Link>
                  <button className='UserListEdit' onClick={() => DeleteHandler(params.row.id)}>
                    <DeleteIcon className='UserListEditIcon' />
                  </button>
              </>
            )
          }
        },
      ];

  return (
    <div className='UserList'>
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
              rows={products}
              columns={columns}
              pageSize={11}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    </div>
  )
}