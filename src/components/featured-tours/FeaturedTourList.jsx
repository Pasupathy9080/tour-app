import React from "react";
import TourCard from "../../shared/TourCard";
// import tourdata from '../../assets/data/tours'
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
  
  const { data: featuredTours,loading,error } = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTours`
  );
  // console.log(featuredTours)
  return (
    <>
      {
        loading && <h4 className="d-flex align-items-center justify-content-center">Loading...</h4>
      }
      {
        loading && <h4>{error}</h4>
      }
      <div className="tour-section-content d-flex align-items-center justify-content-center flex-wrap gap-4">
        { !loading && !error && featuredTours?.map((tours) => (
          <div className="mb-4" key={tours._id}>
            <TourCard tours={tours} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedTourList;
