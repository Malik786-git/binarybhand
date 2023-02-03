import React from "react";


const Hero = () => {
  return (
    <>
    <div className="coursel-style">
     </div>
      <div id="carouselExample" className=" carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item  active"  data-bs-interval="10000">
            <img
              src="/img/slider1.png"
              className="d-block w-100"
              alt="sliderpic"
            />
            <div className="carousel-caption d-block">
              <h1 className="slider-heading">
                ACHIEVE YOUR <br /> <span>"BUSINESS GOALS"</span>
              </h1>
            </div>
          </div>
          <div className="carousel-item "  data-bs-interval="10000">
            <img
              src="/img/slider1.png"
              className="d-block w-100"
              alt="sliderpic"
            />
            <div className="carousel-caption d-block">
              <h1 className="slider-heading">
                ACHIEVE YOUR <br /> <span>"BUSINESS Dreems"</span>
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/slider1.png"
              className="d-block w-100"
              alt="sliderpic"
            />
            <div className="carousel-caption d-block">
              <h1 className="slider-heading">
                ACHIEVE YOUR <br /> <span>"BUSINESS Success"</span>
              </h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="help_hero">
          <a href="#">
            <div className="help-btn">
               <h5>HAVE A PROJECT?</h5>
               <span>We Can Help {">"}</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
