import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { IoIosArrowForward } from 'react-icons/io'
import metaMask from '../../img/metaMask.png'
import walletConnect from '../../img/walletConnect.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
						<Button className='modal-btn mt-2'>		
								<Row className='align-items-center'>
									<Col xs lg="1 p-2 text-start"><img src={metaMask} alt="" /></Col>
									<Col md="auto p-0 text-start">Metamask</Col>
									<Col className='text-end'>
										<IoIosArrowForward />
									</Col>
								</Row>					  						
						</Button>
						<Button className='modal-btn mt-3 mb-2'>		
								<Row className='align-items-center'>
									<Col xs lg="1 p-2 text-start"><img src={walletConnect} alt="" /></Col>
									<Col md="auto p-0 text-start">WalletConnect</Col>
									<Col className='text-end'>
										<IoIosArrowForward />
									</Col>
								</Row>					  						
						</Button>		
				</Modal.Body>
    		</Modal>
	 </>
  )
}

export default VModal
