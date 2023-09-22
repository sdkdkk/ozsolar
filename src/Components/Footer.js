import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ data }) => {
  let SocialMedia1 = data?.SocialMedia;
  let document1 = data?.document ? data?.document : [];
  const handleMenuItemClick = (link) => {
    localStorage.setItem("activeLink", link);
  };
  console.log(document1);
  const uniqueMap = new Map();
  for (const item of document1) {
    uniqueMap.set(item.name, item);
  }
  const uniqueData = Array.from(uniqueMap.values());
  uniqueData.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
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
                {uniqueData.map((el, i) => {
                  if (el.product_id === undefined) {
                    return (
                      <li key={i}>
                        {!el?.result?.length > 0 ? (
                          <Link
                            to={"/" + el.name}
                            onClick={() => {
                              handleMenuItemClick("/" + el.name);
                            }}
                          >
                            {el.name}
                          </Link>
                        ) : (
                          <Link
                            onClick={() => {
                              handleMenuItemClick("/" + el.name);
                            }}
                          >
                            {el.name}
                          </Link>
                        )}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Product</h4>
              <ul className="footer-nav">
                {uniqueData.map((el, i) => {
                  console.log(el);
                  if (
                    el.product_id !== undefined &&
                    el.product_id !== "000000000000000000000000"
                  ) {
                    return (
                      <li key={i}>
                        {!el?.result?.length > 0 ? (
                          <Link
                            to={"/" + el.name}
                            onClick={() => {
                              handleMenuItemClick("/" + el.name);
                            }}
                          >
                            {el.name}
                          </Link>
                        ) : (
                          <Link
                            onClick={() => {
                              handleMenuItemClick("/" + el.name);
                            }}
                          >
                            {el.name}
                          </Link>
                        )}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="col-lg-3">
              <h4 className="footer-title">Follow Us</h4>
              {data?.SocialMedia && (
                <ul className="footer-social-icons social-media-link">
                  <li>
                    <Link
                      to={SocialMedia1[0]?.Facebook}
                      // to="https://www.facebook.com/OZSOLARNEEDS"
                      className="icofont-facebook"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <Link
                      to={SocialMedia1[0]?.Twitter}
                      // to="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"
                      className="icofont-twitter"
                      target="_blank"
                    />
                  </li>
                  <li>
                    <Link
                      to="https://api.whatsapp.com/send/?phone=61430305960&text&type=phone_number&app_absent=0"
                      className="icofont-whatsapp"
                      target="_blank"
                    />
                  </li>
                </ul>
              )}
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
