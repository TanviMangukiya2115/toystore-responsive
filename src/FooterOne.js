import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function FooterOne(){
     return(
          <footer className='footer'>
            <Container>
               <Row className='pt-5 border-bottom align-items-center'>
                    <Col col={12} lg={4} className='mb-4'>
                    <Nav.Link href="/" className='logo fw-250 fs-3'>ToyStore</Nav.Link>
                    </Col>
                    <Col col={12} lg={4}>
                    <ul className='d-flex menu-footer'>
                         <li className='me-3'><Link to='/' className='text-decoration-none text-white'>Home</Link></li>
                         <li className='me-3'><Link to='/CatalogOne' className='text-decoration-none text-white'>Catalog</Link></li>
                         <li className='me-3'><Link to='/DeliveryOne' className='text-decoration-none text-white'>Delivery</Link></li>
                         <li className='me-3'><Link to='/AboutOne' className='text-decoration-none text-white'>About</Link></li>
                         <li className='me-3'><Link to='/ContactsOne' className='text-decoration-none text-white'>Contacts</Link></li>
                    </ul>
                    </Col>
                    <Col col={12} lg={4} className=' d-flex justify-content-end  fs-6 menu-icon pb-3'>
                         <FaTwitter className='me-sm-3 me-2'></FaTwitter>
                         <FaFacebookSquare className='me-sm-3 me-2'></FaFacebookSquare>
                         <FaInstagram className='me-sm-3 me-2'></FaInstagram>
                         <FaPinterest className='me-sm-3 me-2'></FaPinterest>
                         <FaYoutube className='me-2' ></FaYoutube>
                    </Col>
               </Row>
               <Row  className='pt-5'>
                    <Col sm={12} lg={6}>
                         <p>Created with love by Elastic Themes</p>
                    </Col>
                    <Col sm={12} lg={6} className='text-end d-flex justify-content-end'>
                         
                          <p>Powered by Webflow</p>
                          <ul className='d-flex ms-3'>
                              <li className='me-5'>Style Guide</li>
                              <li>Licensing</li>
                         </ul>
                    </Col>
               </Row>
            </Container>
        </footer>
     )
}
export default FooterOne;