import React,{useState,useEffect} from 'react'
import CommonSection from '../shared/CommonSection';
import "../styles/Tour.css"
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'
import { Container,Row,Col} from 'reactstrap';
// import FeaturedTourList from '../components/featured-tours/FeaturedTourList';
import TourCard from '../shared/TourCard';
// import tourData from '../assets/data/tours'

import useFetch from '../components/hooks/useFetch';
import { BASE_URL } from '../utils/config';


const Tour = () => {

  const [pageCount,setPageCount]=useState(0);
  const [page,setPage]=useState(0);
  
  const {data:tours} =useFetch(`${BASE_URL}/api/v1/tours?page=${page}`)
  const {data:tourCount} =useFetch(`${BASE_URL}/api/v1/tours/search/getTourCount`)


  useEffect(()=>{
    const pages=Math.ceil(tourCount/8);
    setPageCount(pages);
    window.scrollTo(0,0);
  },[page,tourCount,tours]);

  return (
    <div className='tour-full'>
    <CommonSection title={'All Tours'}/>
    <section className='p-0 '>
      <Container>
         <Row>
          <Col lg='12' className='mb-4'>
          <SearchBar/>
          </Col>
         </Row>
      </Container>
    </section>

     <section className='pt-0'>
      <Container>
        <Row>
          {
            tours?.map(tours=>(
              <Col lg='3' md='6' sm='6' className='mb-4' key={tours._id}>
                 <TourCard tours={tours} className="tour-search-card"/>
                 
              </Col>
            ))
          }
          <Col lg="12">
          <div className="pagination d-flex align-items-center
            justify-content-center flex-wrap mt-4 gap-3">
               {[...Array(pageCount).keys()].map(number=>
                <span key={number} onClick={()=>setPage(number)}
                className={page===number?"active_page":""}
                >
                  {number +1}
                </span>
                )}
    </div>
    </Col>
        </Row>
      </Container>
    </section> 
    
  <Newsletter/>

    </div>
  )
}

export default Tour;
