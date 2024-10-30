import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import SpecificCategory from '../../Components/SpecificCategory/SpecificCategory'
import { Helmet } from 'react-helmet'

const Categories = () => {
  const [catrgoryData, setcatrgoryData] = useState([])


  function getAllCategories(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  const {data ,isLoading}=useQuery('categories',getAllCategories)



  async  function specificCategory(id) {
    const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
    console.log(data.data)
    setcatrgoryData(data.data)
}


  return (
  <>
  
<Helmet>
  <meta charSet="utf-8" />
  <title>Categories Page</title>
</Helmet>

{isLoading?
    <div className=' d-flex justify-content-center align-items-center py-5 my-3'>
<i className=' fas fa-spinner fa-spin fa-2x'></i>

</div>    
:

  <div className='row g-3 py-5'>

  {data?.data?.data.map((cat,index)=><div key={index} className='col-sm-6 col-md-4'>

<div className='border border-1 rounded-2 hover-main' onClick={()=>specificCategory(cat._id)}>
  
<img src={cat.image} alt={cat.name}  className=' w-100 Categoriesimg ' />
<h4 className='text-center my-3 fw-bolder text-main' >{cat.name}</h4>
</div>


</div>)}  



 </div>
  
  }
  
  <SpecificCategory  catrgoryData={catrgoryData} />

  </>
  )
}

export default Categories