import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png'
import Modal from './modal/Modal';
//import Hero from './Hero';


const NavBar = () => {

	//const [modalShow, setModalShow] = React.useState(false);

	return (
		<>
		<Navbar  expand="lg">
			<Container className='px-0'>
			<Navbar.Brand href="/"><img src={logo} alt="metabnb_logo" /></Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
				<Nav
					className="mx-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
					navbarScroll
				>
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/place-to-stay">Place to stay</Nav.Link>
					<Nav.Link href="#NFTs">NFTs</Nav.Link>
					<Nav.Link href="#Communities">Communities</Nav.Link>
				</Nav>
				<div className="">			
							<Modal/>							
						</div>						 
			</Navbar.Collapse>
			</Container>
			</Navbar>
		</>
  );
}
// render(<NavBar />);
export default NavBar
