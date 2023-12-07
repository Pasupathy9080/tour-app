import React, { useState } from "react";
import CommonSection from "./../shared/CommonSection";
// import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard";
import { Link } from "react-router-dom";
import Newsletter from "./../shared/Newsletter"

const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);
  // console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-3">
        
              {data.length === 0 ? (
                <div>              
                <h4 className="text-center">No tour found</h4>
                <Link to='/home' className="primary__btn text-decoration-none m-3">Back</Link>
                </div>
              ) : (
                data?.map((tours) => (
                  <div className="mb-4" key={tours._id}>
                    <TourCard tours={tours} />
                  </div>
                ))
              )}
       
      </div>
      <Newsletter/>
    </>
  );
};

export default SearchResultList;
