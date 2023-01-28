import React, { useState } from 'react'
import './NewUser.css'
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';

export default function NewUser() {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  const ChangeName = (event) => {
    setName(event.target.value)
  }

  const ChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const ChangeJob = (event) => {
    setJob(event.target.value)
  }

  const ChangeAge(event) => {
    setAge(event.target.value)
  }

  return (
    <div className='newUser'>
      <div className="newUserTitle">
        <h1>Add New User</h1>
      </div>
      <form className="newUserForm" method='post'>
        <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            value={name}
            onChange={() => ChangeName(event)}
          />
          <TextField
            required
            id="outlined-required"
            label="User Name"
            defaultValue=""
            value={username}
            onChange={() => ChangeUsername(event)}
          />
          <TextField
            required
            id="outlined-required"
            label="Job"
            defaultValue=""
            value={job}
            onChange={() => ChangeJob(event)}
          />
          <TextField
            required
            id="outlined-required"
            label="Age"
            defaultValue=""
            value={age}
            onChange={() => ChangeAge(event)}
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
      </form>
    </div>
  )
}
