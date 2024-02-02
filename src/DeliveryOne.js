import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import HeaderOne from './HeaderOne';
import SubscribeOne from './SubscribeOne';
import InstaOne from './InstaOne';
import FooterOne from './FooterOne';

function DeliveryOne(){
     return(
          <>
            <HeaderOne/>
            <div className='full-catalog pt-5'>
               <Container className=' border  rounded-4 bg-light pt-5 ps-5 pb-4 mt-5'>
                    <Row className='py-5 ps-lg-5 mb-5'>
                         <Col lg={7} className='me-5'>
                                   <h2  className='varela mb-3'>Delivery Info</h2>
                                   <p className='opensans mb-4'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.</p>
                                   
                                   <h2  className='varela mb-3'>What’s a Rich Text element?</h2>
                                   <p className='opensans mb-4'>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>

                                   <h3  className='varela mb-3'>Static and dynamic content editing</h3>
                                   <p className='opensans mb-4'>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing.</p>
                                   <ul>
                                        <li>Beautifully Designed</li>
                                        <li>100% Responsive</li>
                                        <li>CMS Content</li>
                                        <li>Smooth Animations</li>

                                   </ul>
                                   <p>For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>

                                   <h3  className='varela mb-3'>How to customize formatting for each rich text</h3>
                                   <p className='opensans'>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                              
                         </Col>
                         <Col lg={3} md={12} className='cant_find'>
                              <div  className='h-0 border rounded-4 text-center py-5'>
                                   <p className='w-75 mx-auto'>
                                   Can't Find the Answer to Your Question?
                                   </p>
                                   <button className='delivery_btn px-4 py-2 rounded-5'>Contact Us</button>
                              </div>
                         </Col>
                    </Row>
               </Container>
               <SubscribeOne/>
               <InstaOne/>
               <FooterOne/>
            </div>
          </>
     )
}
export default DeliveryOne;