import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 3000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 

  return (
    <>
      <div>
        <div className="test-wrapper mt-3">
          <figure>
            <img src="./img/testimonialswrapper.png" alt="aboutus" />
          </figure>
        </div>
        <div className="container-fluid test-white-bg">
          <div className="container test-content text-dark">
            <div className="row">
              <div className="col-sm-12 col-11 mx-auto">
                <h4>TESTIMONIALS</h4>
              </div>
              <div className="col-sm-12 col-11 mx-auto">
                <h1>
                  WHAT THEY <br /> SAY ABOUT US
                </h1>
              </div>
              <div className="col-12">
                <div className="testimonials-slider-container">
                 <Slider {...settings}>
                   
                      <div className="testimonials-card">
                        <div className="row">
                          <div className="col-lg-4 mx-auto">
                            <figure>
                              <img src="./img/Mask.png" alt="" />
                            </figure>
                          </div>
                          <div className="col-lg-8 testimonial-paragraph mx-auto">
                            <figure className="mb-5">
                              <img
                                src="./img/Quote.png"
                                className="quoteImg"
                                width="100px"
                                alt=""
                              />
                            </figure>
                            <p className="mb-5">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet. Lorem ipsum dolor sit amet, consetetur
                              sadipscing elitr, sed diam nonumy eirmod tempor
                              invidunt ut labore et dolore magna aliquyam erat,
                              sed diam voluptua. At vero eos et accusam et justo
                              duo dolores et ea rebum. Stet clita kasd
                              gubergren, no sea takimata sanctus est Lorem ipsum
                              dolor sit amet.
                            </p>
                            <h6>
                            Gregory Hayes - <span className="CEO">CEO of photoin.id</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="testimonials-card">
                        <div className="row">
                          <div className="col-lg-4 mx-auto">
                            <figure>
                              <img src="./img/Mask.png" alt="" />
                            </figure>
                          </div>
                          <div className="col-lg-8 testimonial-paragraph mx-auto">
                            <figure className="mb-5">
                              <img
                                src="./img/Quote.png"
                                className="quoteImg"
                                width="100px"
                                alt=""
                              />
                            </figure>
                            <p className="mb-5">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet. Lorem ipsum dolor sit amet, consetetur
                              sadipscing elitr, sed diam nonumy eirmod tempor
                              invidunt ut labore et dolore magna aliquyam erat,
                              sed diam voluptua. At vero eos et accusam et justo
                              duo dolores et ea rebum. Stet clita kasd
                              gubergren, no sea takimata sanctus est Lorem ipsum
                              dolor sit amet.
                            </p>
                            <h6>
                            Gregory Hayes - <span className="CEO">CEO of photoin.id</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                      {/* 3 */}
                      <div className="testimonials-card">
                        <div className="row">
                          <div className="col-lg-4 mx-auto">
                            <figure>
                              <img src="./img/Mask.png" alt="" />
                            </figure>
                          </div>
                          <div className="col-lg-8 testimonial-paragraph mx-auto">
                            <figure className="mb-5">
                              <img
                                src="./img/Quote.png"
                                className="quoteImg"
                                width="100px"
                                alt=""
                              />
                            </figure>
                            <p className="mb-5">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua. At vero eos et accusam et justo duo
                              dolores et ea rebum. Stet clita kasd gubergren, no
                              sea takimata sanctus est Lorem ipsum dolor sit
                              amet. Lorem ipsum dolor sit amet, consetetur
                              sadipscing elitr, sed diam nonumy eirmod tempor
                              invidunt ut labore et dolore magna aliquyam erat,
                              sed diam voluptua. At vero eos et accusam et justo
                              duo dolores et ea rebum. Stet clita kasd
                              gubergren, no sea takimata sanctus est Lorem ipsum
                              dolor sit amet.
                            </p>
                            <h6>
                            Gregory Hayes - <span className="CEO">CEO of photoin.id</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
