import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../../Context/CartContext'
import axios from 'axios'
import toast from 'react-hot-toast'

const Product = ({product}) => {

const {AddToCart}=useContext(CartContext)

function addcart(id){
AddToCart(id)
}


  const {imageCover,price,category,title,ratingsAverage ,id}=product
const [heart, setheart] = useState(false)

async function AddWishlist(id){
  setheart(true)
 try {
  const {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    productId: id
},{
  headers:{
    token:localStorage.getItem('Token')
  }
})
if (data.status === 'success') {
  toast.success(data.message)



}
 } catch (error) {
  console.log(error.response.data.message)
 }
}


return (
    <>

    <div className='col-sm-6 col-md-4 col-lg-3'>
      
      <div className='product cursor-pointer overflow-hidden px-2 py-3 position-relative'>
{heart?

<i  className=" fa-solid fa-heart fs-5 position-absolute wishlist"></i>
:
      <i  className=" fa-regular fa-heart fs-5 position-absolute wishlist" onClick={()=>AddWishlist(id)}></i>

}

     <Link to={`/productdetails/${id}`}>
     <img src={imageCover} alt="stevejob" className=' img-fluid' />
     <h5 className=' font-sm text-main mt-2'>{category.name}</h5>
      <h4>{title.split(' ').splice(0,2).join(' ')}</h4> 
      <p className='d-flex justify-content-between'>
        <span>{price}</span>
        <span>
          <i className='fas fa-star rating-color me-1'></i>
          {ratingsAverage}

        </span>
      </p>
     </Link>
      <button className='btn bg-main text-white w-100' onClick={()=>addcart(id)}>+Add to Crat</button>

            

      </div>

    </div>

      
    
    
    
    </>
  )
}

export default Product