import PackageBox from "./PackageBox";
import { packagesData } from "../../data";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from "../../data";



const Packages = () => {
  const [packageCat, setPackageCat] = useState(packagesData.webdesign);

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





  const packageName = (name) => {
    setPackageCat(packagesData[name])
  };

  return (
    <>

      <div className="packages-wrapper mt-3" id="packages">
        <img src="./img/packageswrapper.png" alt="aboutus" />
      </div>

      <div className="container packages-content text-light">
        <div className="row">
          <div className="col-sm-12 col-10 mx-auto">
            <h4>PRICES</h4>
          </div>
          <div className="col-sm-12 col-10 mx-auto mb-5">
            <h1>PRICES PACKAGES</h1>
            <p>
              We’ve got a lot of awards for our products and services that
              became popular in the world.
            </p>
          </div>
          <div className="col-10 mx-auto mt-5 mb-5">
            <div className="packages-services">
              <div
                onClick={() => packageName("webdesign")}
                className="packages-category"
              >
                <span>WEB DESIGN</span>
              </div>
              <div
                onClick={() => packageName("logo")}
                className="packages-category"
              >
                <span>LOGO</span>
              </div>
              <div
                onClick={() => packageName("animation")}
                className="packages-category"
              >
                <span>Video Animation</span>
              </div>
              <div
                onClick={() => packageName("seo")}
                className="packages-category"
              >
                <span>SEO</span>
              </div>
              <div
                onClick={() => packageName("ecommerce")}
                className="packages-category"
              >
                <span>E-COMMERCE</span>
              </div>
              <div
                onClick={() => packageName("shopify")}
                className="packages-category"
              >
                <span>SHOPIFY</span>
              </div>
            </div>
            <div className="row packages-boxes">

            <div className="col-12">
                <div className="service-slider-container">
                  
                  <Slider {...settings}>
                    {/* {dataDigitalBestSeller.map((item, index) => (
                      <div className="cardd" key={index}>
                        <div className="cardd-top">
                          <h1>{item.id}</h1>
                        </div>
                        <div className="cardd-bottom">
                          <h2>{item.title}</h2>
                          <span className="categoryy">{item.desc}</span>
                        </div>
                      </div>
                    ))} */}
                    {packageCat?.map((data, index) => (
                <PackageBox data={data} key={index} />
              ))}
                  </Slider>
                    </div>
          </div>
                  
                 

                  {/* ////////////////// */}
              {/* {packageCat?.map((data, index) => (
                <PackageBox data={data} key={index} />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Packages;
