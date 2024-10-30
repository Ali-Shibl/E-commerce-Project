import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';
import { CartContext } from '../../Context/CartContext';
import { Helmet } from 'react-helmet';


const ProductDetails = () => {
  const setting={
    interval:1000,
    transitionTime:500,
    emulateTouch:true,
    showIndicators:false,
    showStatus:false,
    autoPlay:true,  
  }
  
const {AddToCart}=useContext(CartContext)
function addcart(id){
AddToCart(id)
}

  const {id}=useParams()
  // id:566423467564854dsa5d4

  const [productDetails, setproductDetails] = useState({})
  
  const [isLoading, setisLoading] = useState(false)

async  function getProductDetails(id) {
  setisLoading(true)
    let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setisLoading(false)
    setproductDetails(data.data)
  }
  useEffect(() => {
    getProductDetails(id)
   
  }, [id])
  



  return (<>


<Helmet>
  <meta charSet="utf-8" />
  <title>{productDetails?.title?.split(' ').splice(0,2).join(' ')}</title>
  <meta name="description" content="productdetails" />

</Helmet>

  {isLoading?<div className=' d-flex justify-content-center align-items-center py-5 my-3'>
<i className=' fas fa-spinner fa-spin fa-2x'></i>

</div>

:
<div className='row g-md-5 g-3 m-0  align-items-center'>
    <div className='col-lg-3 col-md-4'>
    <Carousel  {...setting} >
    {productDetails.images?.map((img ,index)=><img src={img} key={index} alt='imgproduct' className='w-100' />)}
    </Carousel>
    </div>
    <div className='col-lg-9 col-md-8'>
    <h2 className='my-3 lh-base'>{productDetails?.title?.split(' ').splice(0,2).join(' ')}</h2>
      <h5 className=' font-sm text-main mt-3'>{productDetails?.category?.name}</h5>
       <p className='mt-3'>{productDetails?.description}</p>
      <p className='d-flex justify-content-between'>
        <span>{productDetails?.price} EGP</span>
        <span>
          <i className='fas fa-star rating-color me-1'></i>
           {productDetails?.ratingsAverage}
        </span>
      </p>
      <button className='btn bg-main text-white w-100' onClick={()=>addcart(productDetails?.id)}>+Add to Crat</button>
      

    </div>

  </div>
 
}
  
  </>
  )
}

export default ProductDetails