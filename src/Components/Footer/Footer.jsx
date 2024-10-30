import React from 'react'
import imgfooter1 from '../../Assets/images/apps_1.jpg'
import imgfooter2 from '../../Assets/images/apps_2.jpg'
import imgfooter3 from '../../Assets/images/paypalamexmastercardvisa2.jpg'


const Footer = () => {
  return (
    <>
    <footer className='bg-light py-3 pt-md-5 pb-md-4  mt-5'>
        <div className='container'>
            <h4>Get the Frech Crt App</h4>
            <p>we will send you a link,ioen it on your phone to download the app .</p>
            <div className='row g-3  align-items-center'>
                <div className='col-lg-10'>
                    <input type="text" className='form-control py-2' placeholder='EMail...' />

                </div>
                <div className='col-lg-2 '>
                     <button className='btn w-100 bg-main text-white'>Share App Link</button>
                </div>
                

            </div>
            <div className=' border-bottom border-2 my-4'></div>

            <div className='row g-2 justify-content-between'>
              <div className='col-lg-6 d-flex align-items-center flex-column flex-md-row gap-2'>

                <p className='p-0 mb-3 m-md-0 fw-bold'>Payment Partners</p>
                <img src={imgfooter3} alt="" className='w-75'  style={{height:'40px'}}/>

              </div>
              <div className='col-lg-6 justify-content-end align-items-center gap-2  d-none d-lg-flex'>
                <p className='p-0 m-0 fs-6 fw-bolder'>Get deliveries with FreshCart</p>
                 
                <img src={imgfooter1} alt=""  className='img-fluid' style={{height:'40px'}}/>
              <img src={imgfooter2} alt="" className='img-fluid' style={{height:'40px'}}/>
           
              


              </div>

            </div>

        </div>
    </footer>
    
    </>
  )
}

export default Footer