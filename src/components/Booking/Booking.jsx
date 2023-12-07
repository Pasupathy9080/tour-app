import React, { useState,useEffect } from "react";
import "./Booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";

const Booking = ({ tours, avgRating }) => {
  const { id } = useParams();
  const { price, reviews, title } = tours;
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [booking, setBooking] = useState({
    tourId: id,
    tourName: title,
    userId: user && user.data._id,
    userEmail: user && user.email,
    fullName: user && user.data.username,
    phone: "",
    guestSize: 1,
    bookAt: "",
  });

  const [paid, setPaid] = useState(
    localStorage.getItem("paid") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("paid", paid);
  }, [paid]);

  const handleToken = () => {
    console.log("handleToken called");
    setPaid(true);
    navigate(`/success/${id}`);
    // Save paid state in localStorage
    localStorage.setItem("paid", "true");
    // console.log(localStorage.getItem("paid"));
  };

  const handleClose = () => {
    console.log("handleClose called");
    setPaid(false);
    // Save paid state in localStorage
  };

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://tour-app-be.onrender.com/api/v1/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      await res.json();
    } catch (err) {
      toast.error("please Login");
    }
  };


  return (
    <>
      <ToastContainer />
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
                value={user.data.username}
                required
                onChange={handleChange}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <input
                type="text"
                placeholder="tourName"
                id="tourName"
                value={title}
                required
                onChange={handleChange}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <input
                type="text"
                placeholder="tourId"
                id="tourId"
                value={id}
                required
                onChange={handleChange}
                disabled
              />
            </FormGroup>
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
            <ListGroupItem className="border-0 p-0 d-flex mt-2 justify-content-around gap-5 w-100 bg-success rounded-2 p-1">
              <h5 className="fw-bold text-white">Total</h5>
              <h4 className="text-white"> $ {totalAmount}<span>{paid && <></>}</span></h4>
              
            </ListGroupItem>
            <div>
              <StripeCheckout
                token={handleToken}
                stripeKey="pk_test_51MY3rESD5CXFUEJk5gBRbiZ7GsWtobaCZ54YWqqbqkOCHQUpgnkPMdhkYOJaaiGcb6N3kv8pucSVuF2L5aJXXoMb00b68E5ClN"
                amount={totalAmount * 100}
                currency="USD"
                closed={handleClose}
              >
                <Button onClick={handleClick}className="w-100 mt-2" color='success' outline>Pay Now</Button>
              </StripeCheckout>
            </div>
          </ListGroup>
        </div>
      </div>
      {/* <Payment totalAmount={totalAmount} /> */}
    </>
  );
};

export default Booking;
