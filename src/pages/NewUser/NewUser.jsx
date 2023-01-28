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

  const ChangeAge = (event) => {
    setAge(event.target.value)
  }

  const submitHandler = async (event) => {
    event.preventDefault()

    let newUserAdd = {
      name,
      username,
      age,
      job
    }

    await fetch('https://dashboard-37f53-default-rtdb.firebaseio.com/users.json',{
      method: 'POST',
      body: JSON.stringify(newUserAdd)
    })
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
            onChange={(event) => ChangeName(event)}
          />
          <TextField
            required
            id="outlined-required"
            label="User Name"
            defaultValue=""
            value={username}
            onChange={(event) => ChangeUsername(event)}
          />
          <TextField
            required
            id="outlined-required"
            label="Job"
            defaultValue=""
            value={job}
            onChange={(event) => ChangeJob(event)}
          />
          <TextField
            required
            id="outlined-required"
            label="Age"
            defaultValue=""
            value={age}
            onChange={(event) => ChangeAge(event)}
          />
          <div className='newUserPic'>
            <span className='newUserPicTitle'>Add Avatar</span>
          <Fab color="primary" aria-label="add" className='newUserAddPic'>
            <AddPhotoAlternateIcon />
          </Fab>
          </div>
          <Button onClick={submitHandler} className='newUserBtn' variant="contained" color="success" type='submit'>
            Register
          </Button>
      </form>
    </div>
  )
}
