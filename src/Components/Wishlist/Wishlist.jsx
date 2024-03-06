import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { CartContext } from '../../Context/CartContext'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
  
const {AddToCart} = useContext(CartContext)
const [Favourit, setFavourit] = useState([])
const [isloading, setisloading] = useState(true)


async function getAllFavouriteWishlist() {
  setisloading(true)
  const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    headers:{
      token:localStorage.getItem('Token')
    }
  })
  console.log(data.data)
  setFavourit(data.data)
  setisloading(false)
}
useEffect(()=>{
getAllFavouriteWishlist()
},[])
async function removeFavourite(id) {

 try {
  const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
    headers:{
      token:localStorage.getItem('Token')
    }
  })
 

  if (data.status === 'success') {
     getAllFavouriteWishlist()
   toast.success(data.message)
  }
 } catch (error) {
  console.log(error.response.data.message)
 }

}


  return (

  <>
  <Helmet>
  <meta charSet="utf-8" />
  <title>My wish Page</title>
</Helmet>
    <div className='my-5 py-3 bg-light px-5'>
      <h2 className='py-4 fw-bolder'>My wish List :</h2>


{isloading ?

<div className=' d-flex justify-content-center align-items-center py-5 my-3'>
<i className=' fas fa-spinner fa-spin fa-2x'></i>

</div>
:
<>

        {Favourit?.map((fav,index)=><div className='row g-3 mb-4 bg-light align-items-center  p-2' key={index}>
        
          <div className='col-md-3' >  
          <img src={fav?.imageCover} className=' img-fluid w-100' alt="stevejob" />
          </div> 

          <div className='col-md-6 d-flex align-items-center justify-content-between flex-md-column justify-content-md-start align-items-md-start' >
             
          <div>
          <p className='fw-bolder'> {fav?.title}</p>
          <p>Price : {fav?.price}</p>
          </div>

          <button className='btn btn-outline-danger' onClick={()=>removeFavourite(fav?.id)}>remove</button>


          </div> 
          
          <div className='col-md-3  d-flex flex-column'>

          <button className='btn btn-outline-success ms-3' onClick={()=>AddToCart(fav.id)}>Add to Cart</button>


          </div>
          
        
        
        
        
        </div>)}
</>}
     
      

      <div className='border border-2 w-100'></div>
      
      </div>
   </> )
}

export default Wishlist