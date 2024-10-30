import React, {  useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Register = () => {

const [errorMsg, seterrorMsg] = useState('')
const [isLoading, setisLoading] = useState(false)
 const navigate= useNavigate()

//logic
const validationSchema= Yup.object({
  name:Yup.string().required('Name is required').min(3,'min length must be more than 3 chracters').max(20,'max length must be less than 20 chracters'),
  email:Yup.string().required('Email is required').matches(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i,'Enter valid Email'),
  password:Yup.string().required('Password is required').matches(/^([A-Z]|[a-z]|[0-9]|[!@#$%^&*]){8,}$/,'password most contain special character , number more than 8 characters and less than 18 characters'  ),
  rePassword:Yup.string().required('Repassword is required').oneOf([Yup.ref('password')],'password and repassword doesnt match'),
  phone:Yup.string().required('Phone is required').matches(/^1[0125][0-9]{8}$/,'enter valid egyption phone number'),
})

const {handleReset,isValid, values , handleSubmit , handleChange ,errors ,touched ,handleBlur}=useFormik({
  initialValues:{
    name:"",
    email:"",
    password:'',
    rePassword:'',
    phone:'',
  },
  onSubmit:async()=>{
    seterrorMsg('')
    
    try {
      setisLoading(true)
          const {data}=await Axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
          if (data.message ==='success') {
            navigate('/login')
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
  <title>Rigester Page</title>
  <meta name="description" content="Rigester" />

</Helmet>

<h1 className='head-form py-3'>Register</h1>
    <form onSubmit={handleSubmit} className='form  p-4 my-2  rounded-5  m-auto'>

    
      
      <label htmlFor="name">Name</label>
      <input onChange={handleChange} onBlur={handleBlur} value={values.name}    type="text"  className="form-control my-2 " id='name' />
      {errors.name && touched.name &&<p className='text-error text-md-end m-0'>{errors.name} <span className='circleerror'>!</span> </p>}
      
      <label htmlFor="email">Email</label>      
      <input onChange={handleChange} onBlur={handleBlur} value={values.email}  type="email" className="form-control  my-2" id='email' />
      {errors.email && touched.email &&<p className='text-error text-md-end m-0'>{errors.email} <span className='circleerror'>!</span> </p>}

      <label htmlFor="phone">phone</label>      
      <input onChange={handleChange} onBlur={handleBlur} value={values.phone}  type="number" className="form-control  my-2" id='phone' />
      {errors.phone && touched.phone &&<p className='text-error text-md-end m-0'>{errors.phone} <span className='circleerror'>!</span> </p>}

      <label htmlFor="password">Password</label>
      <input onChange={handleChange} onBlur={handleBlur} value={values.password}  type="password" className="form-control  my-2" id='password' />
      {errors.password && touched.password &&<p className='text-error text-md-end m-0'>{errors.password} <span className='circleerror'>!</span> </p>}

      <label htmlFor="rePassword">Repassword</label>
      <input onChange={handleChange} onBlur={handleBlur} value={values.rePassword}  type="password" className="form-control  my-2" id='rePassword' />
      {errors.rePassword && touched.rePassword &&<p className='text-error text-md-end m-0'>{errors.rePassword} <span className='circleerror'>!</span> </p>}

  {errorMsg?<div className="alert alert-danger">{errorMsg}</div>:''}

      <div className=' d-flex justify-content-end align-items-center gap-3'>
      <button disabled={!isValid||isLoading} className='mt-4 btn   btn-success' type='submit'>{isLoading?<i className="fa-sharp fa-solid fa-spinner fa-spin"></i>:'Register'}</button>
     
     <button onClick={handleReset} type="reset" className='btn mt-4 btn btn-outline-light'>Reset</button>
  

      </div>
      
       </form>
    
    
    
    </>
  )
}

export default Register