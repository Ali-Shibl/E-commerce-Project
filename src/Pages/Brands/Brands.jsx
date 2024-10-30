import axios from 'axios'
import React, {  useState } from 'react'
import Brand from '../../Components/Brand/Brand'
import './Brands.css'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'

const Brands = () => {
  const [dataBrand, setdataBrand] = useState({})
  const [show, setshow] = useState(false)
  

function getBrands(){
return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  const {data,isLoading}=useQuery('brands',getBrands)


async  function getBrandDetails(id){
  const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
setdataBrand(data.data)
setshow(true)
  }





  return (
    <>
    
<Helmet>
  <meta charSet="utf-8" />
  <title>Brands Page</title>
</Helmet>

    
    {show?
<div className=' box-brand d-flex position-fixed top-0 start-0 end-0 bottom-0 bg-black bg-opacity-25 align-items-start justify-content-center'>
 
  <div className='brand-show bg-white rounded-3 '>

    <div className='text-end border-bottom p-2'>
    <i className="fa-solid fa-circle-xmark fa-2x text-danger cursor-pointer " onClick={()=>setshow(false)}></i>
    </div>

    <div className='d-flex align-items-center p-2 p-md-3 gap-lg-4 gap-0 overflow-hidden '>
        <div>
        <h1 className='text-main fw-bolder'>{dataBrand.name}</h1>
        <p>{dataBrand.slug}</p>
      </div>
  
      <img src={dataBrand.image} alt={dataBrand.name} />      
    </div>
   
   <div className='border-top p-2'>
   <button className='btn btn-secondary d-block ms-auto' onClick={()=>setshow(false)}>Close</button> 
   </div>
  
  </div>

</div>
:''}
  
  
    <h1 className='text-main  fw-bolder text-center mt-5'>All Brands</h1>
    <div className='row g-4 py-4'>
{isLoading?
  <div className=' d-flex justify-content-center align-items-center py-5 my-3'>
<i className=' fas fa-spinner fa-spin fa-2x'></i>

</div>:
<>

    {data?.data.data.map((brand,index)=><Brand brand={brand} key={index} getBrandDetails={getBrandDetails}/>)} 

</>
  
}

    </div>
    </>
    )
}

export default Brands