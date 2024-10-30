import React, {  useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { Auth } from '../../Context/AuthContext'
import { Helmet } from 'react-helmet'

const Login = () => {
  
const {setuserIsLogiedin}=useContext(Auth)




const [errorMsg, seterrorMsg] = useState('')
const [isLoading, setisLoading] = useState(false)
 const navigate= useNavigate()

//logic
const validationSchema= Yup.object({
  email:Yup.string().required('Email is required').matches(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i,'Enter valid Email'),
  password:Yup.string().required('Password is required').matches(/^([A-Z]|[a-z]|[0-9]|[!@#$%^&*]){8,}$/,'password most contain special character , number more than 8 characters and less than 18 characters'  ),
 })

const {handleReset,isValid, values , handleSubmit , handleChange ,errors ,touched ,handleBlur}=useFormik({
  initialValues:{
    email:"",
    password:'',
  },
  onSubmit:async()=>{
    seterrorMsg('')
    
    try {
      setisLoading(true)
          const {data}=await Axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values)
          if (data.message ==='success') {
            navigate('/home')
            setuserIsLogiedin(true)
            localStorage.setItem('Token',data.token)
            localStorage.setItem('Email',data.user?.email)
            localStorage.setItem('Name',data.user?.name)
          }

    } catch (error) {
      seterrorMsg(error.response.data.message)
    }
    setisLoading(false)


  },
  validationSchema
})

  
  return (
    <>
    
<Helmet>
  <meta charSet="utf-8" />
  <title>Login Page</title>
  <meta name="description" content="Login Page" />
</Helmet>

<h1 className='head-form py-3'>Login</h1>
    <form onSubmit={handleSubmit} className='form  p-4 my-3 rounded-5  m-auto'>

    

       <label htmlFor="email">Email</label>     
      <input onChange={handleChange} onBlur={handleBlur} value={values.email}  type="email" className="form-control my-2" id='email' />
      {errors.email && touched.email && <p className='text-error text-md-end m-0 '>{errors.email} <span className='circleerror'>!</span> </p>}

    
      
    
       <label htmlFor="password">Password</label>
      <input onChange={handleChange} onBlur={handleBlur} value={values.password}  type="password" className="form-control my-2" id='password' />
      {errors.password && touched.password && <p className='text-error text-md-end m-0'>{errors.password} <span className='circleerror'>!</span> </p>}

   
  {errorMsg?<div className="alert alert-danger">{errorMsg}</div>:''}

 

    
 
 
 <div className=' d-flex justify-content-between align-items-md-center  flex-md-row flex-column-reverse mt-3'>
  
  <Link to={'/forgetpassword'}>
 <p className='btn text-white  mt-2 mt-md-0  m-0 '>ForgetPassword?</p>
  </Link>

    <div className='d-flex align-items-center gap-md-3 gap-0 justify-content-between'>
    <button disabled={!isValid||isLoading} className=' btn   btn-success' type='submit'>{isLoading?<i className="fa-sharp fa-solid fa-spinner fa-spin"></i>:'Login'}</button>
     
     <button onClick={handleReset} type="reset" className='btn  btn btn-outline-light'>Reset</button>
  
    </div>

  

      </div>
      
    </form>
    
    
    
    </>
  )
}

export default Login