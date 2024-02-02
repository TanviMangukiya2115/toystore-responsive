import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';



function HeaderOne(){
     return(
          <>
               {/* Header */}
               <div class='bg_back'>
                    <Container>
                    <Row className='py-2 d-flex top-header'>
                         <Col xs={7} className='d-xs-flex d-flex call-menu '>
                         <a href='tel:33305239876' className='me-sm-4 me-xs-2 call'>Call Us: +1 213 974-5898</a>
                         <a href='#' className='email_item d-sm-none d-md-block d-none'>Email: toystore@template.com</a>
                         </Col>
                         <Col className='text-end fs-6 menu-icon p-0'>
                              <FaTwitter className='me-sm-3 me-2'></FaTwitter>
                              <FaFacebookSquare className='me-sm-3 me-2'></FaFacebookSquare>
                              <FaInstagram className='me-sm-3 me-2'></FaInstagram>
                              <FaPinterest className='me-sm-3 me-2'></FaPinterest>
                              <FaYoutube className='me-2' ></FaYoutube>
                         </Col>
                    </Row>
                    </Container>
               </div>

               {/* Logo Menu Header   */}
               <div className='nav_menu'>
                 <Container className='menu-header d-flex justify-content-between'>
                    <Navbar collapseOnSelect expand="lg" className="py-3">
                    
                         <Link to="/" className='logo fw-250 fs-3'>ToyStore</Link>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
                         <Navbar.Collapse id="responsive-navbar-nav" className='nav_bar'>
                         <Nav className="me-auto ms-5 menu_list fs-6 fw-200">
                         <Link to="/CatalogOne" className='me-3'>Catalog</Link>
                         <Link to="/DeliveryOne" className='me-3'>Delivery</Link>
                         <Link to="/AboutOne" className='me-3'>About</Link>
                         <Link to="/ContactsOne" className='me-3'>Contacts</Link>
                         </Nav>
                         </Navbar.Collapse>
                    </Navbar>
                    <Nav className='d-flex  shop-detail'>
                         <a href="#cart" className='me-3 cart fs-6'>Cart</a>
                         <a className='shop me-2 fs-3 fw-200'><PiShoppingCartSimpleBold></PiShoppingCartSimpleBold></a>
                         <a className='zero mt-1 px-2 py-0 lh-lg'>0</a>
                    </Nav>
                 </Container>
               </div>
          </>
     )
}

export default HeaderOne;