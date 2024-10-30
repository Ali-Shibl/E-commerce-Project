import React from 'react'
import axios from'axios'
import Product from '../../Components/Product/Product';
import Slider from "react-slick";
import img1 from '../../Assets/images/slider-image-1.jpeg'
import img2 from '../../Assets/images/slider-image-2.jpeg'
import img3 from '../../Assets/images/slider-image-3.jpeg'
import img5 from '../../Assets/images/grocery-banner.png'
import CategoriesSlider from '../../Components/CategoriesSlider/CategoriesSlider';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed: 2500,
    autoplay: true,
    cssEase: "linear",
  };


// use react-query

function getAllProducts(){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}
const {data,isLoading}=useQuery('products',getAllProducts)



  return (
<>


<Helmet>
  <meta charSet="utf-8" />
  <title>Home Page</title>
  <meta name="description" content="home page" />

</Helmet>
{isLoading?<div className=' d-flex justify-content-center align-items-center py-5 my-3'>
<i className=' fas fa-spinner fa-spin fa-2x'></i>

</div>
:
<>
<header className='row  g-0 '>
  <div className='col-lg-9'>
  <Slider  {...settings}>   
   <img src={img3} alt={"headerimg1"} className='w-100' height={450} />

    <img src={img1} alt={"headerimg2"} className='w-100' height={450} />
     
      </Slider>

  </div>
  <div className='col-lg-3  d-lg-block d-none '>
    <img src={img5} alt={"headerimg3"} className='w-100' height={225} />
    <img src={img2} alt={"headerimg4"} className='w-100' height={225} />

  </div>
  
  </header>
  <h1 className='mt-5 mb-4 categories h4'>shop Popular Categories</h1>

  
<CategoriesSlider/>
  
<div className='row m-0 g-3 justify-content-center mt-5'>
    {data?.data?.data.map((product , index)=> <Product product={product} key={index}/>)}
    </div>





    
   </>}
    
    
  </>)
}

export default Home