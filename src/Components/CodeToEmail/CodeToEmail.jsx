import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'


const CodeToEmail = () => {
  
let navigate = useNavigate()
    
let {values,handleChange ,handleSubmit} =   useFormik({
  initialValues:{
            resetCode:"",
        },
       
        onSubmit: async()=>{
            
     try {
      let data =await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,{
        resetCode:`${values.resetCode}`
      })

        console.log(data)
        if(data.data.status === 'Success'){
            navigate("/resetpassword")
        }
      
     } catch (error) {
      console.log(error)

      
     }
               
           
        }
    })
    
  
    return (
      <>
      
       <Helmet>
  <meta charSet="utf-8" />
  <title>codeemail </title>
  <meta name="description" content="codeemail" />

</Helmet>
  
      <form className='py-5' onSubmit={handleSubmit}>
          <label htmlFor="resetCode" className='form-label h5 lh-lg  fw-bolder'>reset your account password :</label>
          <input placeholder='Code' value={values.resetCode} onChange={handleChange} type="number" className='form-control my-3 p-md-3' id="resetCode" name='resetCode' />
        
        <button type='submit' className='btn btn-success mt-2'>Verify</button>
      
      </form>
      

      
      
      </>
    )
}

export default CodeToEmail
