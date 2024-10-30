import { jwtDecode } from 'jwt-decode'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Profile = () => {

const TokenUser=localStorage.getItem('Token')
const EmailUser=localStorage.getItem('Email')
const NameUser=localStorage.getItem('Name')
let UserData=jwtDecode(TokenUser)


  return (
    <>
    
    <Helmet>
  <meta charSet="utf-8" />
  <title>Profile Page</title>
  <meta name="description" content="profile" />

</Helmet>

        <div className='pt-5'>
            <h3 className='fw-bolder mb-4'>Profile :</h3>
        <h5 className='mb-2 '><span className='text-main lead mt-3'>Name :</span> {NameUser}</h5>
        <h6 className='mb-2 '><span className='text-main lead my-3'>Email :</span> {EmailUser}</h6>
        <p className='mb-2'><span className='text-main lead '>Id :</span> {UserData.id}</p>
        

        <Link to='/updateuserdata'> 
       <button className='btn btn-outline-success me-4 my-2'>UpdateData</button>
       </Link>

       <Link to='/changepassword'> 
       <button className='btn btn-outline-danger my-2 '>Change Password</button>
       </Link>
      

</div>
    
    </>
  )
}

export default Profile