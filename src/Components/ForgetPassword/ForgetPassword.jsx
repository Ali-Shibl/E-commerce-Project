import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {

const navigate=useNavigate()

const { values , handleSubmit , handleChange }=useFormik({
    initialValues:{
      email:"",
    },
    onSubmit:async()=>{
      
     try {
        const {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{email:values.email })
        
        if (data.statusMsg === 'success' ) {

            console.log(data)
            navigate('/codetoemail')
        }
        
     } catch (error) {

        console.log(error.response.data.message)

     }
        

  
  
    }
  })

  return (
    <>
    
     <Helmet>
  <meta charSet="utf-8" />
  <title>forgetpassword Page</title>
  <meta name="description" content="forgetpassword" />

</Helmet>

    <form className='py-5' onSubmit={handleSubmit}>

    <label htmlFor="email" className='form-label h5 lh-lg  fw-bolder'>please enter your verification code :</label>
   <input placeholder='Email' value={values.email} onChange={handleChange} type="email" className=' form-control my-3 p-md-3' id='email' />
      
      <button className='btn btn-success mt-2'>Verify</button>
    
    </form>
    
    
    </>
  )
}

export default ForgetPassword