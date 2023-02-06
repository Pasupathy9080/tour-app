import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import experienceImg from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";
import FeaturedTourList from "../components/featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
import SliderHome from "../components/Testimonial/SliderHome";

const Home = () => {
  return (
    <>
      {/* search section */}
      <section className="mb-0 pb-0">
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                {/* <h1 className="fw-bold">
                  Travelling opens the door to <br/>creating memories
                </h1>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, obcaecati. Tenetur aliquid modi iure optio ex. Dolore
                  accusantium omnis quod minima praesentium doloremque quasi
                  dignissimos fugit, eos temporibus rerum eius?
                </p> */}

                <h1><span>Travel</span><br/>Beyond Your Wildest Dreams</h1>      
                <p>
                  Welcome to our travel website, your one-stop source for all things travel. We're here to help you plan your next adventure and make the most of your travels.
                  <span>Start planning your next trip today and let us
                  help you turn your travel dreams into reality.</span>
                </p>
              </div>
            </Col>

            {/* <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <video src={heroVideo} alt="heroImg" controls />
              </div>
            </Col>

            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg02} alt="heroImg" />
              </div>
            </Col> */}
            <Col lg="6" className="slider-homes">
              <SliderHome/>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* services section */}
      <section className="mt-0">
        <Container>
          <Row>
            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* tour section */}

      <div className="tour-section">
        <div className="tour-title-content d-flex align-items-center justify-content-center mb-4">
          {/* <Subtitle subtitle={"Explore"} /> */}
          <h2 className="featured_tour-title fw-bold">Our featured tours</h2>
        </div>
        <FeaturedTourList />
      </div>

      {/* experience */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                {/* <Subtitle subtitle={"Experience"} /> */}
                <h2 className="fw-bold">
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  maxime officia quaerat
                  <br />
                  dolorum impedit optio, labore, illum at magni ex dolores quae
                  exercitationem nulla dicta obcaecati expedita veritatis quam
                  cupiditate.
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center justify-content-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>

                <div className="counter_box">
                  <span>2k+</span>
                  <h6>regular client</h6>
                </div>

                <div className="counter_box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* gallery */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {/* <Subtitle subtitle={'Gallery'}/> */}
              <h2 className="gallery_title fw-bold">
                Visit our customers tour gallery
              </h2>
            </Col>

            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {/* <Subtitle subtitle={'Fans Love'}/> */}
              <h2 className="testimonial_title fw-bold">
                What our fans say about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* subscribe */}
      <Newsletter />
    </>
  );
};

export default Home;
