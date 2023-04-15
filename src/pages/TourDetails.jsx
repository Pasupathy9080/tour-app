import React, { useRef, useState,useEffect} from "react";
import "../styles/TourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
// import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import {BASE_URL} from "./../utils/config"
import useFetch from "./../components/hooks/useFetch"
import {useNavigate} from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify'
import { useSelector } from 'react-redux';


const TourDetails = () => {
  const { id } = useParams();
const reviewMsgRef = useRef("");
const [tourRating, setTourRating] = useState(5);
const user = useSelector(state => state.auth.user);
const { data: tours, setData: setTours } = useFetch(`${BASE_URL}/api/v1/tours/${id}`); // added setData

useEffect(() => {
  window.scrollTo(0, 0);
}, [tours]);

const {
  photo,
  title,
  desc,
  price,
  address,
  city,
  reviews,
  distance,
  maxGroupSize,
} = tours;
const { totalRating, avgRating } = calculateAvgRating(reviews);
const options = { day: "numeric", month: "long", year: "numeric" };
const navigate = useNavigate();

const submitHandler = async (e) => {
  e.preventDefault();
  const reviewText = reviewMsgRef.current.value;

  try {
    if (!user || user === undefined || user === null) {
      toast.error('Please sign in');
      navigate('/login');
    }

    const reviewObj = {
      username: user?.username,
      reviewText,
      rating: tourRating
    };

    const res = await fetch(`${BASE_URL}/api/v1/review/${id}`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(reviewObj)
    });

    const result = await res.json();
    toast.success(result.message);

    // Update the UI with the submitted review immediately
    // Assuming result.data is the new review object returned from the API
    // You may need to modify this based on your API response structure

    // Fetch updated tour data from the API to reflect the new review
    const updatedTours = await fetch(`${BASE_URL}/api/v1/tours/${id}`);
    const updatedToursData = await updatedTours.json();
    setTours(updatedToursData); // Update the state with the new tour data

  } catch (err) {
    console.log(err);
    // alert(err.message);
  }
};

  
  
  const ratingOptions = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];
  return (
    <>
    <ToastContainer/>
      <section className="pt-5">
        <Container>
          <Row>
            <Col lg="8" className="mt-5">
              <div className="tour_content">
                <img src={photo} alt="" />

                <div className="tour_info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="tour_rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-line"
                        style={{ color: "var(--secondary-color" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>

                    <span>
                      <i className="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>
                  <div className="tour_extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i>$ {price}
                      /per person
                    </span>
                    <span>
                      <i className="ri-map-pin-line"></i>
                      {distance} k/m
                    </span>
                    <span>
                      <i className="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>

                  <h6 className="fw-bold">Description</h6>
                  <p>{desc}</p>
                </div>

                {/* review section */}

                <div className="tour_reviews mt-4 ">
                  <h5 className="fw-bold">Reviews({reviews?.length})</h5>
                  <Form onSubmit={submitHandler}>           
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      {ratingOptions.map((element) => (
                        <span
                          key={element.id}
                          onClick={() => setTourRating(element.value)}
                        >
                          {element.value}
                          <i className="ri-star-s-fill"></i>
                        </span>
                      ))}
                    </div>
                    <div className="review_input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="share your experience"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user_reviews">
                    {reviews?.map((review,idx) => (
                      <div className="review_item" key={idx}>
                        <img src={avatar} alt="reviewer" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5 className="fw-bold">{review.username}</h5>
                              <p>
                                {new Date(review.createdAt).toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}<i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* review end */}
              </div>
            </Col>

            <Col lg="4" className="mt-5">
              <Booking tours={tours} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default TourDetails;
