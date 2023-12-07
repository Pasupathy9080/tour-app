import React from 'react'
import './Newsletter.css'

import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter_content">
                        <h2 className='fw-bold'>Subscribe now to get useful travelling information.</h2>
                        <div className="newsletter_input">
                            <input type="email" placeholder='Enter your email'/>
                            <button className="btn newsletter_btn fw-bold">
                                Subscribe
                            </button>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima voluptate totam rerum unde vitae atque cum quia hic, 
                          quae et quis voluptatum libero itaque sint sequi odio facere aliquam quod?</p>
                    </div>
                </Col>

                <Col lg='6'>
                  <div className="newsletter_img">
                    <img src={maleTourist} alt="TouristImg" />
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter;