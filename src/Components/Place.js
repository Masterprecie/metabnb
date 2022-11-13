import React from 'react'
import { Button } from 'react-bootstrap'
import NavBar from './NavBar'
import Footer from './Footer'
import {placeData} from '../PlaceData'
import { AiFillStar } from 'react-icons/ai'
import search from '../img/search.png'

const list = [
	'Resturant', 'Cottage', 'Castle', 'fantast city', 'beach', 'Carbins', 'off-grid','Farm'
]

const Place = () => {


  return (
	  <>
		  <NavBar />

		  <section className='container-fluid'>	
			  <div className='container' id='place'>
				  <div className='nft_location pt-5 pb-5 d-flex justify-content-between align-items-center'>
					  <div className='list' >
						  <ul className=''>
							  {list.map((item) => {
								  return <li>{item}</li>
							  })
							    }
						  </ul>
					  </div>
					  <div>
						  <Button className='place-location-btn d-flex'>
							
							  <p className='m-0 pe-5'>Location</p>
							  <img src={search} alt="" />
						  </Button>
					  </div>
				  </div>


					<div className='row pt-5 pb-5'>
						{placeData.map((placeImg) => {
							const { id, img, title, amount, distance, duration } = placeImg;
							return <div key={id} className='col-lg-3 col-md-6 col-sm-12 mb-3'>
							<div id='insp-card'>
								<div>
									<img src={img} alt="" className='img-fluid img' />
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
			  </div>
		  </section>
		  <Footer/>
	 </>
  )
}

export default Place