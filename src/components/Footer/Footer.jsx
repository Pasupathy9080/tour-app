import React from "react";
import "./Footer.css";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/traveGo-logo.png";
import { Link } from "react-router-dom";

const quick_links1 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick_links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="footerImg" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

              <div className="social_links d-flex align-items-center  gap-4 mb-3">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title fw-bold">Discover</h5>
            <ListGroup className="footer_quick-links">
              {quick_links1.map((item, index) => (
                <ListGroupItem key={index} className="quicklinkbox">
                  <Link to={item.path} className="ps-0 border-0 quicklinkbox">
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title fw-bold">Quick Links</h5>
            <ListGroup className="footer_quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="quicklinkbox">
                  <Link to={item.path} className="ps-0 border-0 quicklinkbox">
                    {item.display}
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" >
            <h5 className="footer_link-title fw-bold">Contact</h5>
            <ListGroup className="footer_quick-links">
              <ListGroupItem className="quicklinkbox ps-0 border-0 d-flex align-content-center  gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i className="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className="mb-0">ABC street</p>
              </ListGroupItem>

              <ListGroupItem className="quicklinkbox ps-0 border-0 d-flex align-content-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i className="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className="mb-0">gobinaths7878@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="quicklinkbox ps-0 border-0 d-flex align-content-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i className="ri-phone-line"></i></span>
                Phone:
                </h6>
                <p className="mb-0">1234567890</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <div  className="text-center pt-5 cr-border">
            <p className="copyright">
               Copyright © {year} All rights reserved.
            </p>
      </div>
    </footer>
  );
};

export default Footer;
