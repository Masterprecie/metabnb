import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { IoIosArrowForward } from 'react-icons/io'
import metaMask from '../../img/metaMask.png'
import walletConnect from '../../img/walletConnect.png'
import '../modal/Modal.css'

const VModal = (props) => {
  return (
	  <>
		   <Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
			  	centered
				>
				<Modal.Header className='p-4' closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
							Connect Wallet
				</Modal.Title>
				</Modal.Header>
				<Modal.Body className='p-4'>
						<h4>Choose your preferred wallet:</h4>
				  <Button className='modal-btn mt-2 p-3'>	
					  <div className='d-flex justify-content-between align-items-center'>
						  <div className='d-flex align-items-center'>
							  <img src={metaMask} alt="" />
							  <p className='m-0 ps-3'>Metamask</p>
						  </div>
						  <div>
							  <IoIosArrowForward />
						  </div>						  
					  </div>			  			  				
					</Button>
				  <Button className='modal-btn mt-3 mb-2 p-3'>	
					  <div className='d-flex justify-content-between align-items-center'>
						  <div className='d-flex align-items-center'>
							  <img src={walletConnect} alt="" />
							  <p className='m-0 ps-3'>WalletConnect</p>
						  </div>
						  <div>
							  <IoIosArrowForward />
						  </div>						  
					  </div>
					</Button>		
				</Modal.Body>
    		</Modal>
	 </>
  )
}

export default VModal
