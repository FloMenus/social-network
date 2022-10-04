import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/User'
import { useEffect } from 'react'

const Profile = () => {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    
  return (
    <div>
        {console.log(user)}
        <h1>Profile</h1>
        <p>{user.name.first}</p>
    </div>
  )
}

export default Profile