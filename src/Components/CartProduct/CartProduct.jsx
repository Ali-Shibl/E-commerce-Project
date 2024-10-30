import React, { useState } from 'react'

const CartProduct = ({productcart,removeproduct,updataCartProductCount }) => {

const [count, setCount] = useState(productcart.count)

  return (<>
  <div  className='my-3 rounded-2 shadow p-2'>

<div className='row g-0 align-items-center '>
    <div className='col-md-2 '>
          <img   src={productcart.product?.imageCover} alt={productcart.product?.category?.name}  className=' w-100 '/>
    </div>

    <div className='col-md-8 p-2 p-md-4'>
     <h2>{productcart.product?.title}</h2>
     <h5>{productcart.product?.category?.name}</h5>
     <p>{productcart.price} EGP </p>
     <p><i className='fas fa-star rating-color me-1'></i>{productcart.product?.ratingsAverage}</p>
     <p><span className='fw-bolder'>Total Price:</span> {productcart.price * productcart.count}EGP </p>
   </div>
   <div className='col-md-2  d-flex flex-md-column align-items-center justify-content-between'>
  <button className='btn text-danger mb-3' onClick={()=>removeproduct(productcart.product._id)}>remove</button>
  <div className='d-flex align-items-center'>
    <button disabled={count===1} className='btn bg-main text-white mx-2' onClick={()=>{updataCartProductCount(productcart.product._id,count -1); setCount(count -1)}}>
      -
    </button>
    <span>{count}</span>
    <button className='btn bg-main text-white mx-2' onClick={()=>{updataCartProductCount(productcart.product._id,count +1); setCount(count +1)}}>
      +
    </button>
  </div>
  
</div>
   </div>

</div>
  
  
  
  
  </>
  )
}

export default CartProduct