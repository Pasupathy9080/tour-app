import React from "react";
import Slider from "react-slick"; 
// import heroImg from "../../assets/images/hero-img01.jpg";
// import heroImg02 from "../../assets/images/hero-img02.jpg";
import "./SliderHome.css"


const SliderHome = () => {
    
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

      <div className="testimonial slider-home">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src='https://img.freepik.com/free-photo/bali-pagoda-indonesia_1150-11021.jpg?w=740&t=st=1675535447~exp=1675536047~hmac=92f8484fca064bf5e2e12981258a6970e08e04b9ecb40a2357286f7dd311cb4e' alt="sliderImg" className="slide-img-home" />       
        </div>
      </div>

      <div className="testimonial slider-home  ">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src='https://w0.peakpx.com/wallpaper/655/414/HD-wallpaper-man-made-rice-terrace.jpg' alt="sliderImg" className="slide-img-home" />         
        </div>
      </div>

      <div className="testimonial slider-home">
        <div className="d-flex align-items-center  mt-3">
          <img src='https://img.freepik.com/free-photo/asian-woman-wearing-vietnam-culture-traditional-strawberry-garden-doi-ang-khang-chiang-mai-thailand_335224-760.jpg?t=st=1675535953~exp=1675536553~hmac=f8e60917ceb761367abe1ed89b73430018c2de2a98a4ef9ba4ff6bf1cd116845' alt="sliderImg" className="slide-img-home" />
          {/* <video src={heroVideo} alt="heroImg" controls /> */}
        </div>
      </div>

      <div className="testimonial slider-home ">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src='https://img.freepik.com/free-photo/bird-s-eye-view-breathtaking-mountain-machu-picchu-peru_181624-10826.jpg?w=740&t=st=1675536091~exp=1675536691~hmac=7128af9e67c6280c1b8c0bc39daab8183130eaa565d8d5bd7abb64bfe33f6cf4' alt='tourImg' className="slide-img-home" />       
        </div>
      </div>

      <div className="testimonial slider-home  ">
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src='https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg?w=740&t=st=1675536229~exp=1675536829~hmac=9699125ebaf507a8eb68d60d2e2d6e1d21b76b8787cae0c7e2bf1ef8449cd371' alt="sliderImg" className="slide-img-home" />         
        </div>
      </div>

    </Slider>
  );
};

export default SliderHome;
