import React, { useRef, useState,useEffect,useContext} from "react";
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
import {AuthContext} from './../context/AuthContext'
import {useNavigate} from "react-router-dom";


const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(0);
  const {user} =useContext(AuthContext)

  // const tours = tourData.find(tours => tours.id === id);
  const {data:tours} = useFetch(`${BASE_URL}/tours/${id}`)

  useEffect(()=>{
    window.scrollTo(0,0);
  },[tours]);

  const {
    photo,
    title,
    desc,
    price,
    address,
    reviews,
    city,
    distance,
    maxGroupSize,
  } = tours;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    
    try{
      
      if (!user || user ===undefined || user ===null){
        alert('please signin')
        navigate('/login');
      }

      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:tourRating
      }
        const res =await fetch(`${BASE_URL}/review/${id}` ,{
          method:'post',
          headers:{
            'content-type':'application/json'
          },
          credentials:'include',
          body:JSON.stringify(reviewObj)
        })
        
        const result= await res.json();
        // if(!res.ok) {
        //   return alert(result.message);
        // }

        alert(result.message)

    } catch(err){
      console.log(err)
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
                    {/* <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span key={0} onClick={()=>setTourRating(0 + 1)}>
                        1<i className="ri-star-s-fill"></i>
                      </span>
                      <span key={1} onClick={()=>setTourRating(1 + 1)}>
                        2<i className="ri-star-s-fill"></i>
                      </span>
                      <span key={2} onClick={()=>setTourRating(2 + 1)}>
                        3<i className="ri-star-s-fill"></i>
                      </span>
                      <span key={3} onClick={()=>setTourRating(3 + 1)}>
                        4<i className="ri-star-s-fill"></i>
                      </span>
                      <span key={4} onClick={()=>setTourRating(4 + 1)}>
                        5<i className="ri-star-s-fill"></i>
                      </span>
                    </div> */}
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
                    {reviews?.map(review => (
                      <div className="review_item" key={tours}>
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
