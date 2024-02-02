import { Col, Container, Row } from 'react-bootstrap';
import './App.css';


function InstaOne(){
     return(
          <>   
          <div className='.img-slider-back'>
               <Container>
                    <div className='text-center varela made-web-contant'>
                    <p className='made-web'>@ElasticThemes</p>
                    <h2 className='simple-business w-50'>We're on Instagram! </h2>
                    </div>
                    <Row className='gallery-img text-center pt-5 mt-5'>
                    <Col xs={4}   lg={2} className='instagram'>
                         <img src={require(`./image/asset 25.jpeg`)} className='rounded-4'></img>
                    </Col>
                    <Col xs={4}   lg={2} className='instagram'>
                         <img src={require(`./image/asset 26.jpeg`)} className='rounded-4'></img>
                    </Col>
                    <Col xs={4}   lg={2} className='instagram'>
                         <img src={require(`./image/asset 27.jpeg`)} className='rounded-4'></img>
                    </Col>
                    <Col xs={4}   lg={2} className='instagram'>
                         <img src={require(`./image/asset 28.jpeg`)} className='rounded-4'></img>
                    </Col>
                    <Col xs={4}   lg={2} className='instagram'>
                         <img src={require(`./image/asset 29.jpeg`)} className='rounded-4'></img>
                    </Col>
                    <Col xs={4}   lg={2} className='instagram'>
                         <img src={require(`./image/asset 30.jpeg`)} className='rounded-4'></img>
                    </Col>
                    </Row>
                    <Row className='pt-5 mt-4 mb-5 pb-5'>
                         <Col className='text-center'>
                              <button className='rounded-5 button-see-more varela'>See More Photos</button>
                         </Col>
                    </Row>
               </Container>
          </div>
          </>
     )
}


export default InstaOne;