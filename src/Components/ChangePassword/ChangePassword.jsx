import axios from 'axios'
import { useFormik } from 'formik'
import React, {  useState } from 'react'
import { Helmet } from 'react-helmet'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'


const UpdataDataLogged = () => {
  const navigate=useNavigate()
const [isLoading, setisLoading] = useState(false)
const [errorMsg, seterrorMsg] = useState('')

  const validationSchema= Yup.object({
    currentPassword:Yup.string().required('Password is required').matches(/^([A-Z]|[a-z]|[0-9]|[!@#$%^&*]){8,}$/,'password most contain special character , number more than 8 characters and less than 18 characters'  ),
    password:Yup.string().required('Password is required').matches(/^([A-Z]|[a-z]|[0-9]|[!@#$%^&*]){8,}$/,'password most contain special character , number more than 8 characters and less than 18 characters'  ),
    rePassword:Yup.string().required('Repassword is required').oneOf([Yup.ref('password')],'password and repassword doesnt match'),
    
  })

const {values,handleBlur ,handleChange ,handleSubmit ,touched,errors,isValid}=useFormik({
  initialValues:{
    currentPassword:"",
    password:"",
    rePassword:""
},onSubmit:async()=>{
  seterrorMsg('') 
setisLoading(true)
try {

   const{ data}=await axios.put(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,values,{
    headers:{
      token:localStorage.getItem('Token')
    }
  })
  console.log(data)
  if (data.message === 'success') {
    toast.success('success change Password')
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
  <title>changepassword Page</title>
  <meta name="description" content="changepassword" />

</Helmet>
    
   <form onSubmit={handleSubmit} className='form  p-4 my-5 rounded-5  m-auto'>

    <label htmlFor="currentPassword">currentPassword :</label>
    <input value={values.currentPassword} onChange={handleChange} onBlur={handleBlur} type="password" id='currentPassword' placeholder='currentPassword'className='form-control my-2'/>
{errors.currentPassword&&touched.currentPassword&& <div className='alert-danger alert'>{errors.currentPassword}</div>}

    <label htmlFor="password"> password :</label>
    <input value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" id='password' placeholder='password' className='form-control my-2'/>
    {errors.password&&touched.password&& <div className='alert-danger alert'>{errors.password}</div>}


    <label htmlFor="rePassword">rePassword :</label>
    <input value={values.rePassword} onChange={handleChange} onBlur={handleBlur} type="password" id='rePassword' placeholder='rePassword' className='form-control my-2'/>
    {errors.rePassword&&touched.rePassword&& <div className='alert-danger alert'>{errors.rePassword}</div>}

{errorMsg?<div className='alert alert-danger'>{errorMsg}</div>:''}

<button disabled={!isValid||isLoading} className=' btn btn-outline-light mt-3' type='submit'>{isLoading?<i className="fa-sharp fa-solid fa-spinner fa-spin"></i>:'Update'}</button>

   </form>
  </>)
}

export default UpdataDataLogged