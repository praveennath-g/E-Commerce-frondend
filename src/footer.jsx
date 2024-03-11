import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./images/logo.png" width="100px" alt="logo"></img>
            </div>
            <div className="detail">
              <p>
                we are a team of designers and developers that create high
                quality wordpress{" "}
              </p>
              <div className="icon">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <AiFillInstagram />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Term & Condition</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
