import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="section1 overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <Link to='/'>
                  <img
                    src="assets/images/logo/logo-black.png"
                    alt="Logo Black"
                  />
                </Link>
              </div>
              {/* Footer Logo End */}
              {/* Contact Info Start */}
              {/* <div class="contact-info">AB Road XX, AB Floor, New York, AA 123456 <br> <Link to="tel:+012-345-6789-00">(+012) 345-6789-00</Link> <br> <Link to="mailto:hello@consulte.co">hello@consulte.co</Link></div> */}
              {/* Contact Info End */}
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Quick Links</h4>
              {/* Footer Nav Start */}
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
              {/* Footer Nav End */}
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Finance Options</h4>
              {/* Footer Nav Start */}
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
              {/* Footer Nav End */}
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Follow Us</h4>
              {/* Footer Social Icons Start */}
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
              {/* Footer Social Icons End */}
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row footer-border-top">
            <div className="col-lg-6">
              {/* Copyright Start */}
              <div className="copyright">©2023 Oz Solar Needs</div>
              {/* Copyright End */}
            </div>
            <div className="col-lg-6">
              {/* Copyright Start */}
              <div className="copyright text-end">
                Website Designed by:{" "}
                <Link target="_blank" to="https://www.setblue.com/">
                  Setblue
                </Link>
              </div>
              {/* Copyright End */}
            </div>
          </div>
        </div>
      </footer>
      {/* End Main Footer */}
    </>
  );
};

export default Footer;
