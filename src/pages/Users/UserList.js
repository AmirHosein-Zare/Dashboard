import React, {useState} from 'react'
import { userRows } from '../../datas';
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export default function UserList() {

    const [UserDatas, setUserDatas] = useState(userRows)

    //data Grid Column
    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell: (params) => {
            return(
              <Link to='/' className='UserListLink'>
                <div className="UserListUser">
                  <img src={params.row.avatar} className="UserListImg"/>
                  {params.row.username}
                </div>
              </Link>
            )
          }
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 100,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: () => {
            return(
              <>
                <Link to='/'>
                  <button className='UserListEdit'>
                    <EditIcon className='UserListEditIcon' />
                  </button>
                </Link>
              </>
            )
          }
        },
      ];

  return (
    <div className='UserList'>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={UserDatas}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    </div>
  )
}