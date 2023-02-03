import React from "react";

const Footer = () => {
  return (
    <div className="Footer container-fluid ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-img">
            <figure>
              <img src="/img/logo.png" alt="" />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="footer-content">

            <ul>
              <li><a className="nav-link" aria-current="page" href="#">HOME</a></li>
              <li><a className="nav-link" aria-current="page" href="#about">ABOUT</a></li>
              <li> <a className="nav-link" aria-current="page" href="#services">SERVICES</a></li>
              <li> <a className="nav-link" aria-current="page" href="#packages">PRICING</a></li>
              <li> <a className="nav-link" aria-current="page" href="#contact">CONTACT</a></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright text-center py-4">©copyright Binary Chemist 2022 - All Right Reserved</div>
    </div>
  );
};

export default Footer;
