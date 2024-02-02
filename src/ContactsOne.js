import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import HeaderOne from './HeaderOne';
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import InstaOne from './InstaOne';
import SubscribeOne from './SubscribeOne';
import FooterOne from './FooterOne';

function ContactsOne(){
     return(
          <>
            <HeaderOne/>
            <div className='full-catalog pt-5'>
               <div>
                    <Container className='border p-5 rounded-4'>
                         <div className='m-5'>
                              <Row className='py-5 rounded-4 mb-5 border went_wrong'>
                                   <Col sm={12} className='text-center p-5'>
                                        <button className='opensans px-3 bg-secondary text-light rounded-5 fs-3 border-0 mb-3 mt-5 '>!</button>
                                        <h4 className='opensans mb-3'>Oops! Something went wrong.</h4>
                                        <p className='pb-5 mb-5'>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                                   </Col>
                              </Row>
                              <Row className='pt-4'>
                                   <Col className=' leave_msg'>
                                        <h3 className='varela mb-4'>Leave a Message</h3>
                                        <div className='opensans mb-5'>
                                             <p>Full Name</p>
                                             <input type='text' placeholder='Enter your name' className='w-75 py-2 px-4'></input>
                                        </div>
                                        <div className='opensans mb-5'>
                                             <p>Email Address</p>
                                             <input type='text' placeholder='Your contact email' className='w-75 py-2 px-4'></input>
                                        </div>
                                        <div className='opensans mb-5'>
                                             <p>Email Address</p>
                                             <textarea type='text' placeholder='Message text' className='w-75 lh-lg pb-5 pt-3 px-4'></textarea>
                                        </div>
                                        <button className='opensans send_btn border-0 rounded-5 text-white px-5 py-3'>Send Message</button>
                                   </Col>
                                   <Col className='contact_info'>
                                        <div className='pb-5'>
                                             <h3 className='varela pb-4'>Contact Info</h3>
                                             <p className='w-50'>4293  Euclid Avenue, Los Angeles, CA 90012 +1 213 974-3898</p>
                                             <a className='text-decoration-none text-dark border-bottom pb-2 border-secondary'>toystore@template.com</a>
                                        </div>
                                        <div className='mt-3'>
                                             <h5 className='varela'>Follow Us</h5>
                                             <ul className='contact_icon d-flex ps-0 pt-4'>
                                                  <li><a className='twitter text-decoration-none text-white px-2 py-2 me-2 d-flex rounded-5'><FaTwitter></FaTwitter></a></li>
                                                  <li><a className='facebook text-decoration-none text-white px-2 py-2 me-2 d-flex rounded-5'><FaFacebookSquare></FaFacebookSquare></a></li>
                                                  <li><a className='insta text-decoration-none text-white px-2 py-2 me-2 d-flex rounded-5'><FaInstagram></FaInstagram></a></li>
                                                  <li><a className='pintrest text-decoration-none text-white px-2 py-2 me-2 d-flex rounded-5'><FaPinterest></FaPinterest></a></li>
                                                  <li><a className='youtube text-decoration-none text-white px-2 py-2 me-2 d-flex rounded-5'><FaYoutube></FaYoutube></a></li>
                                             </ul>
                                        </div>
                                   </Col>
                              </Row>
                         </div>
                    </Container>
               </div>
               <InstaOne/>
               <SubscribeOne/>
               <FooterOne/>
            </div>
          </>
     )
}
export default ContactsOne;