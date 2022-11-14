import React from 'react'
import { inspData } from '../InspData'
import { AiFillStar } from 'react-icons/ai'
  
const Inspiration = () => {
  return (
    <>
      <section className='container pt-5'>
        <div className='text-center'>
          <h1>Inspiration for your next adventure</h1>
        </div>

        <div className='row pt-lg-5 pt-3 pb-5'>
          {inspData.map((inspImg) => {
            const { id, img, title, amount, distance, duration } = inspImg;
            return <div key={id} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
              <div id='insp-card'>
                <div>
                  <img src={img} alt="nft_images" className='img-fluid img'/>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                  <div>
                    <p>{title}</p>
                    <p>{distance}</p>                    
                   </div>
                  <div className='text-end ps-2' >
                    <p className='emphasize'>{amount}</p>
                    <p>{duration}</p>                   
                  </div>
                </div>
                 <div className='svg'>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                    </div>
              </div>
            </div>
          })}
        </div>
    </section>
    </>
  )
}

export default Inspiration