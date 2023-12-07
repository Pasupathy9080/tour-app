import React from "react";
import "./TourCard.css";
// import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import { useSelector } from 'react-redux';



const TourCard = ({ tours }) => {

  const user = useSelector(state => state.auth.user);
  const { _id, title, city, photo, price, featured, reviews } = tours;
  const {totalRating,avgRating}=calculateAvgRating(reviews)

  return (
    <div className="tour_card" key={tours.id}>
      
        <div className="tour_img">
          <img src={photo} alt="tour-img"/>
          {featured && <span>Featured</span>}
        </div>

       
          <div className="card_top d-flex align-items-center justify-content-between flex-wrap gap-4 ">
            <span className="tour_location d-flex align-items-center gap-1 ">
              <i className="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              <i className="ri-star-line"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>
          <h5 className="tour_title fw-bold m-2">
            {user ?<><Link to={`/tours/${_id}`}>{title}</Link></>:<><Link to='/login'></Link></>}
            
          </h5>
          <div className="card_bottom d-flex align-items-center justify-content-between mt-3 gap-4">
            <h5>
              ${price} <span>/per person</span>
            </h5>
            <button className="btn booking_btn">
              {user ? <><Link to={`/tours/${_id}`}>Book Now</Link></> :<><Link to='/login'>Book Now</Link></>}
              
            </button>
          </div>
        
    </div>
  );
};

export default TourCard;
