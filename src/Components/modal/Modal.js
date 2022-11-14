import React from 'react'
import VModal from './VModal'
import Button from 'react-bootstrap/Button';
const Modal = () => {

 const [modalShow, setModalShow] = React.useState(false);

  return (
	  <>
		  
		<Button className='navbar-btn'  onClick={() => setModalShow(true)} >Connect to wallet</Button>      
      <VModal
        show={modalShow}
        onHide={() => setModalShow(false)}
		  />
	  </>
  )
}

export default Modal