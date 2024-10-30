import React, { useContext } from 'react'
import { Auth } from '../../Context/AuthContext'
import { Navigate  } from 'react-router-dom'

export default function AuthProductRouter({children}) {
    const {userIsLogiedin}=useContext(Auth)


  return (
    <>
    {userIsLogiedin ?   <Navigate to={'/home'}/> : children}
    
    </>
  )
}
