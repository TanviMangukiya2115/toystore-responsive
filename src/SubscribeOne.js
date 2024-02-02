import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { FaPaperPlane } from 'react-icons/fa';


function SubscribeOne(){
     return(
          <>
           <Container className='submit mt-5 pt-5 mb-5'>
               <Row className='align-items-center'>
               <Col sm={12} md={6} className=' d-flex text-sm-center'>
                    <a className='paln-icon me-3'><FaPaperPlane></FaPaperPlane></a>
                    <span className='fs-4 newsletter varela '>Subscribe to our newsletter
                         & get <p>10% discount!</p></span>
               </Col>
               <Col sm={12} md={6} className='text-sm-center text-end subscribe'>
                    <input type='text' placeholder='Enter your email address ' className='me-3 rounded-5 py-2 px-5 border-light'></input>
                    <a>
                    <button>Subscribe</button>
                    </a>
               </Col>
               </Row>
           </Container>
          </>
     )
}

export default SubscribeOne;