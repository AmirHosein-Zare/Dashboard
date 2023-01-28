import React from 'react'
import './NewUser.css'
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';

export default function NewUser() {
  return (
    <div className='newUser'>
      <div className="newUserTitle">
        <h1>Add New User</h1>
      </div>
      <div className="newUserForm">
      <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="User Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Job"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Age"
          defaultValue=""
        />
        <div className='newUserPic'>
          <span className='newUserPicTitle'>Add Avatar</span>
        <Fab color="primary" aria-label="add" className='newUserAddPic'>
          <AddPhotoAlternateIcon />
        </Fab>
        </div>
        <Button className='newUserBtn' variant="contained" color="success">
          Register
        </Button>
      </div>
    </div>
  )
}
