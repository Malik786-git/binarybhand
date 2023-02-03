import React, { useState } from "react";


const Contact = () => {
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // new item
  const [packages, setPackages] = useState("");


  console.log(packages)

  return (
    <>
      <div className="contact-wrapper container-fluid text-danger" id="contact">
        <div className="contact-content">
          <h2 className="text-center">
            LET'S START WORKING TOGETHER ON YOUR AMAZING PROJECT
          </h2>
          <form action="" className="contact-form mx-auto">
            <div className="row">
              <div className="col-6 mb-lg-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                  aria-label="email"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-6 mb-lg-0 mb-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  aria-label="email"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="col-12 mb-lg-0 mb-4">
                <input
                  type="email"
                  className="form-control mt-4"
                  placeholder="Enter your email"
                  aria-label="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* new item */}
              <div className="col-12 mt-4 mb-lg-0 mb-4">
                <select class="form-select " aria-label="Default select example" onChange={(e)=>setPackages(e.target.value)}>
                  <option selected>Interested In</option>
                  <option value="Web">Web</option>
                  <option value="App">App</option>
                  <option value="Logo">Logo</option>
                  <option value="Animation">Animation</option>
                  <option value="Social Media">Social Media</option>
                  <option value="SEO">SEO</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="col-12">
                <textarea
                  name="message"
                  cols="30"
                  className="mt-4 message-sec"
                  rows="10"
                  placeholder="Write your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="col-12 mt-4 text-center">
                <button className="submit-btn">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
