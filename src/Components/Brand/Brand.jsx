import React from 'react'

const Brand = ({brand,getBrandDetails}) => {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3' >
    
    <div className='cursor-pointer border rounded-3 hover-main' onClick={()=> getBrandDetails(brand._id)}>   
       <img src={brand.image} alt={brand.name} className='w-100' />
       <p className='text-center py-3'>{brand.name}</p>
     </div>
  </div>
  )
}

export default Brand