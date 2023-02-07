import React,{useRef} from "react";
import "./SearchBar.css";
import { Col, Form, FormGroup } from "reactstrap";
import {BASE_URL} from './../utils/config'
import {useNavigate} from 'react-router-dom'


// toast.configure()


// const Result = () => {
//   return <p>All the inputs are required!</p>;
// };


const SearchBar = () => {
 
  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)
  // const [result, showResult] = useState(false);
  const navigate =useNavigate();
  
  const searchHandler = async()=>{
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxGroupSize = maxGroupSizeRef.current.value
    
    const res = await fetch(`${BASE_URL}/api/v1/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
    if (!res.ok) alert('All inputs are required')


    const result =await res.json()
    navigate(`/api/v1/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state: result.data})


    // if(location==='' || distance==='' || maxGroupSize===''){
    //   // return alert("All fields are required!")
    //   return showResult(true);
    // };
  }
  // setTimeout(() => {
  //   showResult(false);
  // },5000);

  return (
    <Col lg="12">
      
      <div className="search_bar">
        <Form className="d-flex align-items-center mt-4 form-res">
          <FormGroup className="d-flex  form_group form_group-fast">
            <span>
              <i className="ri-map-pin-fill p-2"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="where are you going?" ref={locationRef}/>
            </div>
          </FormGroup>

          <FormGroup className="d-flex  form_group form_group-fast">
            <span>
              <i className="ri-pin-distance-fill p-2"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance k/m" ref={distanceRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex  form_group form_group-last">
            <span>
              <i className="ri-group-fill p-2"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
            </div>
          </FormGroup>
          <div className="search-btn">
          <span className="search_icon p-2" type="submit" onClick={searchHandler}>
          <i className="ri-search-line"></i>
          </span>
          </div>
          
        </Form>
      </div>
      {/* <div className="alert d-flex align-items-center justify-content-end">{result ? <Result /> : null}</div> */}
    </Col>
  );
};

export default SearchBar;
