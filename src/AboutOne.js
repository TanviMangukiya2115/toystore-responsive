import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import HeaderOne from './HeaderOne';
import Aboutwatch from './Aboutwatch';
import SubscribeOne from './SubscribeOne';
import InstaOne from './InstaOne';
import FooterOne from './FooterOne';
import { PiArrowFatRightFill } from 'react-icons/pi';

function AboutOne(){
     return(
          <>
            <HeaderOne/>
            <div className='full-catalog pt-5'>
               <Container className='text-center'>
                         <p className='opensans need_fun'>All You Need is Fun!</p>
                         <h1 className='varela mb-3'>Introducing ToyStore</h1>
                         <p className='opensans w-50 mx-auto mb-4 text-secondary'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                         <p className='mb-5'>
                              <a className='opensans more_us '>More About Us</a>
                         </p>
                    <div className='cartton_img'>
                         <Container>
                              <img src={require(`./image/cartton.jpeg`)} className='rounded-4 mt-3'></img>
                         </Container>
                    </div>
               </Container>
               <div className='.img-slider-back mb-5 pb-5'>
               <Container>
                    <div className='text-center varela made-web-contant'>
                    <p className='made-web'>Made for Webflow</p>
                    <h2 className='simple-business w-50'>
                         Simple & Colorful Ecommerce Template for Your Business
                    </h2>
                    </div>
                    <Row className='colorful'>
                         <Col md={12} lg={6}>
                              <h2 className='varela available-free mb-4 ps-2'>Beautifully Designed</h2>
                              <p className='success mb-5 text-secondary'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                              <button className='varela'>Get It For Free!</button>

                         </Col>
                         <Col md={12} lg={6}>
                              <img src={require(`./image/spider.jpeg`)} className='w-100 h-100 rounded-4'></img>
                         </Col>
                    </Row>
                    <Row className='colorful1'>
                         <Col md={12} lg={6} className='pe-5 '>
                              <img src={require(`./image/short-toy.jpeg`)} className='w-100 h-100 rounded-4'></img>
                         </Col>
                         <Col md={12} lg={6} className='ps-5'>
                              <h2 className='varela available-free mb-4 ps-2 pb-4'>100% Responsive</h2>
                              <p className='success mb-5 mt-4 text-secondary'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                              <a className='header-see fs-6 text-dark'>write perfect ad copy<PiArrowFatRightFill className='ms-1'></PiArrowFatRightFill></a>
                         </Col>
                         
                    </Row>
               </Container>
             </div>
             <Aboutwatch/>
             <SubscribeOne/>
             <InstaOne/>
             <FooterOne/>
            </div>

          </>
     )
}
export default AboutOne;