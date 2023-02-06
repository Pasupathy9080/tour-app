import React from "react";
import Slider from "react-slick";
import ava1 from "../../assets/images/avatar.jpg";
import ava2 from "../../assets/images/avatar.jpg";
import ava3 from "../../assets/images/avatar.jpg";


const Testimonials = () => {

  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:1000,
    slidesToShow:3,

    responsive:[
        {
            breakpoint: 992,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
    ]
};
  return (
    <Slider {...settings}>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum,
          quam vel eius sunt quaerat quos similique iste sit quasi dignissimos
          provident omnis, optio odio odit error, itaque ducimus totam.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava1} alt="sliderImg" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">
                John Doe
            </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum,
          quam vel eius sunt quaerat quos similique iste sit quasi dignissimos
          provident omnis, optio odio odit error, itaque ducimus totam.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava2} alt="sliderImg" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">
                Ben Hello
            </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum,
          quam vel eius sunt quaerat quos similique iste sit quasi dignissimos
          provident omnis, optio odio odit error, itaque ducimus totam.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava1} alt="sliderImg" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">
                John Doe
            </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum,
          quam vel eius sunt quaerat quos similique iste sit quasi dignissimos
          provident omnis, optio odio odit error, itaque ducimus totam.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} alt="sliderImg" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">
                San Healer
            </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      

      {/* <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum,
          quam vel eius sunt quaerat quos similique iste sit quasi dignissimos
          provident omnis, optio odio odit error, itaque ducimus totam.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava2} alt="sliderImg" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">
                Ben Hello
            </h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum,
          quam vel eius sunt quaerat quos similique iste sit quasi dignissimos
          provident omnis, optio odio odit error, itaque ducimus totam.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava3} alt="sliderImg" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">
                San Healer
            </h6>
            <p>Customer</p>
          </div>
        </div>
      </div> */}

    </Slider>
  );
};

export default Testimonials;
