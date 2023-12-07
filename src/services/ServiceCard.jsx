import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({item}) => {

    const {imgUrl,title,desc} =item
  return (
    <div className="service_item d-flex flex-column align-items-center justify-content-center ">
        <div className="service_img">
            <img src={imgUrl} alt="img" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard;