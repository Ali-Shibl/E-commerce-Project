import React from 'react'
import Slider from "react-slick";
import axios from'axios'
import { useQuery } from 'react-query';


const CategoriesSlider = () => {
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows:false,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
               
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };

    function getAllCategories(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
    const {data}=useQuery('categories',getAllCategories)

  return (<>
  <Slider  {...settings} > 

  {data?.data?.data.map((cat,index)=><div key={index}>

  <img src={cat.image} alt={cat.name}   className='w-100 Categoriesimg' />
  <p className='text-center my-2' >{cat.name}</p>

  </div>
  
 )}
 
 </Slider>
  
  
  
  
  
  </>
  )
}

export default CategoriesSlider