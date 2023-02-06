import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import '../styles/Payment.css'
import { useEffect } from 'react'

const Payment = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
  <section className='mt-4'>
    <Container className='mt-5'>
      <Row>
        <Col lg='12' className='mt-5'>
          <div className="payment">
          <h1>Confirm to payment !</h1>
         <a href="https://buy.stripe.com/test_00gbKDeHo9IB14AeUU">PAY NOW</a>
         </div>
        </Col>
      </Row>
    </Container>
  </section>

  )
}

export default Payment