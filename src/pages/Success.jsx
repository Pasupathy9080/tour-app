import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <Container>
      <Row>
        <Col
          lg="12"
          className="mt-5 pt-5 d-flex flex-column align-items-center"
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/155_check_ok_sticker_success-512.png"
            alt="payment success"
            className="w-25"
          />
          <h2 className="text-success text-center">Payment success</h2>
          {/* <h6>Your Tour will be booking successfully.<br/>
            Let's begin Your Happy Journy With Us.</h6> */}
          <Button color="success" outline>
            <Link to='/profile' className="text-warning">View Your Booking</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
