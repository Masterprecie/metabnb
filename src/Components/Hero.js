import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import heroImg from '../img/heroImg.png'
import mbToken from '../img/mbToken.svg'
import metamask from '../img/metamask.svg'
import opensea from '../img/opensea.svg'
import Footer from './Footer';
import Inspiration from './Inspiration';
import NavBar from './NavBar';
import NFTs from './NFTs';


const Hero = (...props) => {

  return (
	  <>	 
		  	<NavBar />
		  <section className='container-fluid px-0' id='hero'>
			  <div className='container'>
				  <div className='row hero-row'>					  
						<div className='col-lg-7 col-md-12 col-sm-12 px-lg-0 px-3'>				  
								<h1>Rent a <span>Place</span> away from <span>Home </span>in the <span>Metaverse</span></h1>
						  		<p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
						  
								<Form className="d-flex mt-5 form">
									<Form.Control
									type="search"
									placeholder="Search for location"
									className="me-0"
									aria-label="Search"
									/>
									<Button className='btn-search' variant="outline-success">Search</Button>
								</Form>
						</div>
						<div className='col-lg-5 col-md-12 col-sm-12 heroImg text-end ps-lg-5'>				  		
								<img src={heroImg} alt="" className='img-fluid'/>
						</div>
				  </div>
				</div>
		  </section> 
		  <section className='container-fluid px-0'>
			  	  <div id='sponsor-logo' className='d-flex justify-content-around'>
					  <img src={mbToken} alt="" />
					  <img src={metamask} alt="" />
					  <img src={opensea} alt=""/>
				  </div>
		  </section>
		  <Inspiration />
		  <NFTs />
		  <Footer /> 			
			
	 </>
  )
}

export default Hero

