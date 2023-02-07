import React, { useState, useContext } from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem,Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tours, avgRating }) => {
  const { price, reviews} = tours;
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    fullName:'',
    phone:'',
    guestSize: 1,
    bookAt:'',
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();
    // console.log(booking)
    try {
      // if(!user || user ===undefined || user===null){
      //   return alert('please sign in')
      //   navigate("/register");
      // }
      if (!user || user === undefined || user === null) {
        alert("please signin");
        navigate("/login");
      }

      const res =await fetch(`${BASE_URL}/api/v1/booking`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(booking)
      })

      const result = await res.json();

      if(!res.ok){
        return alert (result.messaage)
      }

      if (user || user === user.user.name) {
        navigate("/payment");
      }
    } catch (err) {
    alert(err.message)
  }
  };

  return (
    <div className="booking p-3">
      <div className="booking_top d-flex align-items-center justify-content-between ">
        <h3 className="fw-bold">
          {" "}
          $ {price} <span>/per person</span>{" "}
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i className="ri-star-line"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* booikng form */}
      <div className="booking_form">
        <h5 className="fw-bold">Informations</h5>
        <Form className="booking_info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          {/* <FormGroup>
            <input
              type="email"
              placeholder="Email"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup> */}
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            </FormGroup>
            <FormGroup>
            <input
              type="number"
              placeholder="Guest count"
              id="guestSize"
              required
              onChange={handleChange}
            />          
        </FormGroup>
          
        </Form>
      </div>

      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 p-0">
            <h5 className="d-flex align-items-center gap-1 ">
              $ {price}
              <i className="ri-close-line"></i> 1 person
            </h5>
            <span> $ {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 p-0">
            <h5> Service charge</h5>
            <span> $ {serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 p-0 total">
            <h5>Total</h5>
            <span> $ {totalAmount}</span>
          </ListGroupItem>
           <Button
              className="btn primary__btn w-100 mt-4"
              onClick={handleClick}
            >
              Payment
            </Button>
        </ListGroup>
      </div>
    </div>
  );
};

export default Booking;
