import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";



const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate weather",
    desc: "lorem ipsum dolar sit amet,consecetur adipisicing elit",
  },
  {
    imgUrl: guideImg,
    title: "Best tour Guide",
    desc: "lorem ipsum dolar sit amet,consecetur adipisicing elit",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "lorem ipsum dolar sit amet,consecetur adipisicing elit",
  },
  {
    imgUrl: guideImg,
    title: "Best tour Guide",
    desc: "lorem ipsum dolar sit amet,consecetur adipisicing elit",
  },
];

const ServicesList = () => {
  return <>
  {
    servicesData.map((item,index)=>(
    <Col lg='3' key={index} className='p-2 text-center'>
        <ServiceCard item={item}/>
    </Col>
    ))
  }
  </>
};

export default ServicesList;
