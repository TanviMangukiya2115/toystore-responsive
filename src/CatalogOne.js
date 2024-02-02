import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import HeaderOne from './HeaderOne';
import { PiArrowFatRightFill } from 'react-icons/pi';
import SubscribeOne from './SubscribeOne';
import InstaOne from './InstaOne';
import FooterOne from './FooterOne';

function CatalogOne(){
     return(
          <>
             <HeaderOne/>

          <div className='full-catalog'>
               `<div className='img-slider-back pt-5 opensans'>
               <Container>
                    <Row className='mb-4'>
                         <Col md={6} className='fs-3 opensans d-none d-md-block'>
                         All Toys
                         </Col>
                    <Col md={6} className='text-end'>
                         <button className='opensans all_toy_btn  rounded-4 me-4 px-3'>All Toy</button>
                         <span className='opensans me-4'>Wooden Toys</span>
                         <span className='opensans'>Stuffed Animals</span>
                    </Col>
                    </Row>
                    <Row className="mb-5">
                         <Col className='shop-color'>
                              <div className='shop-header-color'></div>
                         </Col>
                    </Row>
                    <Row className='img-slider mb-5'>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 8.png`)}></img>
                              <p className='mt-4'>Teddy Bear</p>
                              <p className='price-tag m-auto '>$30.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 9.png`)}></img>
                              <p className='mt-4'>Happy Flower</p>
                              <p className='price-tag m-auto'>$38.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 10.png`)}></img>
                              <p className='mt-4'>Mega Plus Toy</p>
                              <p className='price-tag m-auto'>$38.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 11.png`)}></img>
                              <p className='mt-4'>Lift Machine</p>
                              <p className='price-tag m-auto'>$24.00 USD</p>
                         </Col> 
                    </Row>
                    <Row  className='img-slider mb-5 '>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 12.png`)}></img>
                              <p className='mt-4'>Cute Dog</p>
                              <p className='price-tag m-auto '>$24.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 13.png`)}></img>
                              <p className='mt-4'>Wooden Camera</p>
                              <p className='price-tag m-auto'>$32.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 14.png`)}></img>
                              <p className='mt-4'>Little Rabbit</p>
                              <p className='price-tag m-auto'>$16.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 15.png`)}></img>
                              <p className='mt-4'>Little Friend</p>
                              <p className='price-tag m-auto'>$27.00 USD</p>
                         </Col> 
                    </Row>
                    <Row  className='img-slider mb-5'>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 16.png`)}></img>
                              <p className='mt-4'>Christmas Deer</p>
                              <p className='price-tag m-auto '>$19.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 17.png`)}></img>
                              <p className='mt-4'>Rainbow Truck</p>
                              <p className='price-tag m-auto'>$28.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 18.png`)}></img>
                              <p className='mt-4'>Pluto Yellow Dog</p>
                              <p className='price-tag m-auto'>$28.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 19.png`)}></img>
                              <p className='mt-4'>Happy Dog</p>
                              <p className='price-tag m-auto'>$30.00 USD</p>
                         </Col>
                    </Row>
                    <Row  className='img-slider mb-5 pb-5'>
                    <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 20.png`)}></img>
                              <p className='mt-4'>Caterpiller</p>
                              <p className='price-tag m-auto '>$18.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 21.png`)}></img>
                              <p className='mt-4'>Grey Elephant</p>
                              <p className='price-tag m-auto'>$45.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 22.png`)}></img>
                              <p className='mt-4'>Wooden Tractor</p>
                              <p className='price-tag m-auto'>$22.00 USD</p>
                         </Col>
                         <Col md={6} lg={3} className='text-center img-back py-5'>
                              <img src={require(`./image/asset 23.png`)}></img>
                              <p className='mt-4'>Funny Clown</p>
                              <p className='price-tag m-auto'>$36.00 USD</p>
                         </Col>
                    </Row>
               </Container>
               </div>
               <SubscribeOne/>
               <InstaOne/>`
          </div>
          <FooterOne/>
          </>
     )
}
export default CatalogOne;