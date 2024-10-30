import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../../Components/Product/Product'
import { Helmet } from 'react-helmet'
import Pagination from "react-js-pagination";


const Products = () => {
  const [activePage, setactivePage] = useState(1)
  const [results, setresults] = useState(0)
  const [metadata, setmetadata] = useState({})


const [products, setProducts] = useState([])
const [productSearch, setproductSearch] = useState([])
const [isLoading, setisLoading] = useState(true)


function handlePageChange(pageNumber) {
setactivePage(pageNumber)
getAllProducts(pageNumber)

}

async function getAllProducts(pageNumber){

    const {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNumber}`)
    setProducts(data.data)
    setisLoading(false)
    setresults(data.results)
    setmetadata(data.metadata)
    console.log(data)

  }

useEffect(()=>{
  getAllProducts(1)

},[])


let prods=[]
function searchProduct(term) {

products?.map((pro)=>{
if (pro.title.toLowerCase().includes(term.toLowerCase()) === true) {
  prods.push(pro)
}})

setproductSearch(prods)

}




  return (
<>

<Helmet>
  <meta charSet="utf-8" />
  <title>Products Page</title>
  <meta name="description" content="products" />

</Helmet>

{isLoading?
  <div className=' d-flex justify-content-center align-items-center py-5 my-3'>
<i className=' fas fa-spinner fa-spin fa-2x'></i>

</div>
:
<>
<form action="" className='my-5'>
  <input placeholder='search product' type="search" className='form-control' id='search' onChange={(e)=>searchProduct(e.target.value)}/>
</form>

{productSearch.length>0?

<div className='row m-0 g-3 justify-content-center mt-3'>
    {productSearch?.map((product , index)=> <Product product={product} key={index}/>)}
    </div>
:
<div className='row m-0 g-3 justify-content-center mt-3'>
    {products?.map((product , index)=> <Product product={product} key={index}/>)}
    </div>
}


 <Pagination
    activePage={activePage}
    itemsCountPerPage={metadata.limit}
     totalItemsCount={results}
     pageRangeDisplayed={5}
     onChange={handlePageChange}      />
     
    
    </>
}


</>




  )
}

export default Products