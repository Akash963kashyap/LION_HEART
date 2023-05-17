import { Outlet } from "react-router";
import "./About.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="about">
      <div className="about-container">
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="about-profile-button"
                onClick={() => setShow(false)}
              >
                Hide My Profile
              </button>
            </Link>
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="about-profile-button"
              onClick={() => setShow(true)}
            >
              {" "}
              Show My Profile
            </button>
          </Link>
        )}
      <Outlet />
      </div>
      <div>
        <div className='about-whole'>
          <div className="about-left">
            <h1>
              Welcome to <br /> The world of <br />{" "}
              <span>Tasty & Fresh Food</span>
            </h1>
            <h4>"Better you will feel if you eat a Lion<span style={{color:"#692320"}}>Heart</span> healthy meal"</h4>
          </div>
          <img className='about-right' src={require("../about/about-img/latte.JPG")} />
        </div>
        
          <div className='inner-bottom'>
            <div className="bottom-details">
            <h2 className='btm-heading'>Vision</h2>
            <p className='about-btm'>For food lovers who want to order food from local restaurants online, the Food Ordering System will be an Internet-based application that will accept individual or group meal orders, process payments, and trigger delivery of the prepared meals to a designated location. For Restaurant owner who wants to take and grow their business online, with low budget can start their online restaurant business and get orders from many more customers.</p>
            </div>
            <img className='img-btm' src={require('../about/about-img/delivery.png')}/>
          </div>
        
      </div>
    </div>
  );
};

export default About;
