import React from "react";

const About = () => {
  return (
    <>
      <div className="about-wrapper mt-3" id="about">
        <img src="./img/aboutwrapper.png" alt="aboutus" />
      </div>
      <div className="container about-content text-light">
        <div className="row">
          <div className="col-sm-12 col-10 mx-auto">
            <h4>ABOUT US</h4>
          </div>
          <div className="col-sm-12 col-10 mx-auto pt-5">
            <h1>
              ULTIMATE EPERIENCES WITH STORY, EMOTION AND PURPOSE
            </h1>
          </div>
          <div className="col-lg-6 col-10 mx-auto mt-5">
            <figure>
              <img src="/img/about.png" alt="" />
            </figure>
          </div>
          <div className="col-lg-6 col-10 mx-auto  mt-5 about-paragraph">
          

            <h6 className="py-xl-2">
              “ Our mission is to produce the highest quality work for every
              clients, on every project with full of energy we have ”
            </h6>

    
            <span className="Binjamin py-xl-2">Binjamin Kao</span>
 
           
            <span className="py-xl-2">DIRECTOR</span>
   
           
            <p className="py-xl-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
