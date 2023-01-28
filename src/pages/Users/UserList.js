import React, {useState} from 'react'
import { userRows } from '../../datas';
import './UserList.css'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function UserList() {

    const [UserDatas, setUserDatas] = useState(userRows)

    //data Grid Column
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 300,
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
          width: 150,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 110,
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