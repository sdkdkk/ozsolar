import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="section1 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo">
                <Link to="/">
                  <img
                    src="assets/images/logo/logo-black.png"
                    alt="Logo Black"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-nav">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/gallary">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/consumer">Consumer Guide</Link>
                </li>
                <li>
                  <Link to="/inverter">Inverter</Link>
                </li>
                <li>
                  <Link to="/panels">Panels</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Finance Options</h4>
              <ul className="footer-nav">
                <li>
                  <Link to="#">Humm</Link>
                </li>
                <li>
                  <Link to="#"> Brighte</Link>
                </li>
                <li>
                  <Link to="#">Zip Pay</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Follow Us</h4>
              <ul className="footer-social-icons social-media-link">
                <li>
                  <Link to="#" className="icofont-facebook" />
                </li>
                <li>
                  <Link to="#" className="icofont-twitter" />
                </li>
                <li>
                  <Link to="#" className="icofont-whatsapp" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row footer-border-top">
            <div className="col-lg-6">
              <div className="copyright">
                {new Date().getFullYear()} Oz Solar Needs
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright text-end">
                Website Designed by:{" "}
                <Link target="_blank" to="https://www.setblue.com/">
                  Setblue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
