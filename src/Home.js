import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import {PiArrowFatRightFill } from "react-icons/pi";
import HeaderOne from './HeaderOne';
import Aboutwatch from './Aboutwatch';
import InstaOne from './InstaOne';
import SubscribeOne from './SubscribeOne';
import FooterOne from './FooterOne';


function Home() {
  return (
    <>
    {/* Header */}
    <HeaderOne/>
    {/* Slider */}
      <div class='slider'>
        <div class='slider-img'>
           <img src={require(`./image/slider.jpg`)}></img>
        </div>
      </div>
    {/* Shop Now */}
    <Container>
      <Row className='mb-5 mt-5 '>
        <Col className='d-flex img-shop align-items-center rounded-5 mt-5 me-4'>
          <div><img src={require(`./image/asset 8.png`)}></img></div>
          <div>
            <h2 className='varela'>Stuffed Animals</h2>
            <button>Shop Now</button>
          </div>
        </Col>
        <Col className='d-flex img-shop align-items-center rounded-5 mt-5 ps-5  text-end ' style={{backgroundColor:"#FB416B"}}>
          <div>
            <h2 className='varela'>Stuffed Animals</h2>
            <button>Shop Now</button>
          </div>
          <div><img src={require(`./image/asset 9.png`)} className='ms-5'></img></div>
        </Col>
      </Row>
    </Container>

    {/* Stuffed animals toy */}
     <div className='img-slider-back pt-5'>
        <Container>
            <Row className='mb-5'>
              <div className='d-flex justify-content-between'>
                <p className='fs-3 opensans'>Stuffed Animals</p>
                <a className='header-see'>See All Toys<PiArrowFatRightFill className='ms-1'></PiArrowFatRightFill></a>
              </div>
              <div className='shop-color'>
                  <div className='shop-header-color'></div>
              </div>
            </Row>
            <Row className='img-slider  pb-5'>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 8.png`)}></img>
                <p className='mt-4'>Teddy Bear</p>
                <p className='price-tag m-auto '>$30.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 10.png`)}></img>
                <p className='mt-4'>Mega Plus Toy</p>
                <p className='price-tag m-auto'>$38.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 12.png`)}></img>
                <p className='mt-4'>Cute Dog</p>
                <p className='price-tag m-auto'>$24.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 15.png`)}></img>
                <p className='mt-4'>Little Friend</p>
                <p className='price-tag m-auto'>$27.00 USD</p>
              </Col>
            </Row>
          </Container>
     </div>
     {/* Wooden Toys */}
     <div className='img-slider-back pt-5 pb-5 mb-5'>
        <Container>
            <Row className='mb-5'>
              <div className='d-flex justify-content-between'>
                <p className='fs-3 opensans'>Wooden Toys</p>
                <a className='header-see'>See All Toys<PiArrowFatRightFill className='ms-1'></PiArrowFatRightFill></a>
              </div>
              <div className='shop-color'>
                  <div className='shop-header-color'></div>
              </div>
            </Row>
            <Row className='img-slider pb-5'>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 9.png`)}></img>
                <p className='mt-4'>Happy Flower </p>
                <p className='price-tag m-auto '>$30.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 11.png`)}></img>
                <p className='mt-4'>Lift Machine</p>
                <p className='price-tag m-auto'>$24.00 USD</p>
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
            </Row>
          </Container>
     </div>
     {/* sticky */}
        <Aboutwatch/>  
      {/* Made For Webflow */}
      <div className='.img-slider-back'>
        <Container>
          <div className='text-center varela made-web-contant'>
            <p className='made-web'>Made for Webflow</p>
            <h2 className='simple-business w-50'>
              Simple & Colorful Ecommerce Template for Your Business
            </h2>
          </div>
          <Row className='colorful1'>
              <Col md={12} lg={6}>
                <h2 className='varela available-free mb-4 ps-2'>Available for FREE!</h2>
                <p className='success mb-5'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                <button className='varela'>GET IT NOW!</button>

              </Col>
              <Col md={12} lg={6}>
                <img src={require(`./image/spider.jpeg`)} className='w-100 h-100 rounded-4'></img>
              </Col>
          </Row>
        </Container>
        <SubscribeOne/>
      </div>

      {/*Were on instagram  */}
        <InstaOne/>
      {/* Footer */}
     
      <FooterOne/>
      
    </>

  );
}
export default Home;