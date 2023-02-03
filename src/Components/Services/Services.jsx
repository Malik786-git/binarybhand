
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../../data";

function Services() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  return (
    <>
      <div className="" id="services">
        <div className="service-wrapper service-wrapper mt-3">
          <figure>
            <img src="./img/servicewrapper.png" alt="aboutus" />
          </figure>
        </div>
        <div className="container-fluid service-white-bg">
          <div className="container service-content text-dark">
            <div className="row">
              <div className="col-sm-12 col-11 mx-auto">
                <h4>OUR SERVICES</h4>
              </div>
              <div className="col-sm-12 col-11 mx-auto pt-5">
                <h1>
                  CREATIVE TREAT WITH <br />
                  OUR MAGIC
                </h1>
              </div>
              <div className="col-12">
                <div className="service-slider-container">
                  
                  <Slider {...settings}>
                    {dataDigitalBestSeller.map((item, index) => (
                      <div className="cardd" key={index}>
                        <div className="cardd-top">
                          <h1>{item.id}</h1>
                        </div>
                        <div className="cardd-bottom">
                          <h2>{item.title}</h2>
                          <span className="categoryy">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default Services;