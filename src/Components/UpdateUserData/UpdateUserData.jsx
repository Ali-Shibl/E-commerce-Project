import axios from 'axios'
import { useFormik } from 'formik'
import React, {  useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Helmet } from 'react-helmet'

const UpdateUserData = () => {

    const navigate=useNavigate()
    const [isLoading, setisLoading] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')
    
    const validationSchema= Yup.object({
        name:Yup.string().required('Name is required').min(3,'min length must be more than 3 chracters').max(20,'max length must be less than 20 chracters'),
        email:Yup.string().required('Email is required').matches(/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,4}$/i,'Enter valid Email'),
         phone:Yup.string().required('Phone is required').matches(/^1[0125][0-9]{8}$/,'enter valid egyption phone number'),
      })
    
    const {values,handleBlur ,handleChange ,handleSubmit ,touched,errors,isValid}=useFormik({
      initialValues:{
        name: "",
        email:"",
        phone:""
    },onSubmit:async()=>{
      seterrorMsg('') 
    setisLoading(true)
    try {
    
       const{ data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/users/updateMe`,{
        name: values.name,
        email: values.email,
        phone: values.phone

    },{
        headers:{
          token:localStorage.getItem('Token')
        }
      })
      console.log(data)
      if (data.message === 'success') {
        toast.success('success Update Data')
       localStorage.setItem('Email',data.user?.email)
       localStorage.setItem('Name',data.user?.name)
       navigate('/profile')
        
      }
    
    } catch (error) {
    
     seterrorMsg(error.response.data.message)
    
    }
    
    setisLoading(false)
    
    }
    ,validationSchema
    })
    
      return (

<>

        <Helmet>
        <meta charSet="utf-8" />
        <title>updata-user-data Page</title>
        <meta name="description" content="updata data user" />
      
      </Helmet>
      
    <form onSubmit={handleSubmit} className='form  p-4 my-3 rounded-5  m-auto'>

    
      <label htmlFor="name">Name</label>
      <input onChange={handleChange} onBlur={handleBlur} value={values.name}    type="text"  className="form-control my-2" id='name' />
      {errors.name && touched.name && <p className=' alert alert-danger'>{errors.name}</p>}
      
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} onBlur={handleBlur} value={values.email}  type="email" className="form-control my-2" id='email' />
      {errors.email && touched.email && <p className=' alert alert-danger'>{errors.email}</p>}
    
      <label htmlFor="phone">phone</label>
      <input onChange={handleChange} onBlur={handleBlur} value={values.phone}  type="number" className="form-control my-2" id='phone' />
      {errors.phone && touched.phone && <p className=' alert alert-danger'>{errors.phone}</p>}

      
  {errorMsg?<div className="alert alert-danger">{errorMsg}</div>:''}

      <div className=' d-flex justify-content-end align-items-center gap-3'>
      <button disabled={!isValid||isLoading} className='mt-4 btn   btn-success' type='submit'>{isLoading?<i className="fa-sharp fa-solid fa-spinner fa-spin"></i>:'update'}</button>
     
  

      </div>
      
       </form>
    </>
      )
    }

export default UpdateUserData