import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      {/* Header Section Start */}
      <div className="header header-transparent-bg">
        {/* Header Wrapper Start */}
        <div className="header-wrapper">
          <div className="back header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-3 col-6">
                  {/* Header Logo Start */}
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        className="fit-image"
                        src="assets/images/logo/logo-black.png"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  {/* Header Logo End */}
                </div>
                <div className="col-lg-10 col-md-9 col-6 mainmenu-w">
                  {/* Main Menu Language Wrapper Start */}
                  <div className="main-menu-language-wrapper">
                    {/* Main Menu Start */}
                    <nav className="main-menu main-menu-white">
                      <ul>
                        <li>
                          <Link className="active" to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Panels</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="#">Q-Cells Panels</Link>
                            </li>
                            <li>
                              <Link to="#">Canadian Solar</Link>
                            </li>
                            <li>
                              <Link to="#">LG Panels</Link>
                            </li>
                            <li>
                              <Link to="#">Jinko</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Inverter</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="#">Fronius </Link>
                            </li>
                            <li>
                              <Link to="#">ABB </Link>
                            </li>
                            <li>
                              <Link to="#">SMA </Link>
                            </li>
                            <li>
                              <Link to="#">Growatt </Link>
                            </li>
                            <li>
                              <Link to="#">Sungrow</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Packages</Link>
                          <ul className="submenu">
                            <li>
                              <Link to="#">Residential</Link>
                            </li>
                            <li>
                              <Link to="#">Commercial</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Gallery</Link>
                        </li>
                        <li>
                          <Link to="#">Finance Options</Link>
                        </li>
                        <li>
                          <Link to="#">Contacts</Link>
                        </li>
                        <li>
                          <Link to="#">Consumer Guide</Link>
                        </li>
                      </ul>
                    </nav>
                    {/* Main Menu End */}
                  </div>
                  {/* Main Menu Language Wrapper End */}
                  <div className="whatsapp">
                    <Link target="_blank" to="https://wa.me/61430305960">
                      <i className="icofont-whatsapp" /> <span>LET'S TALK</span>
                    </Link>
                  </div>
                  {/* Mobile Menu Hamburger Start */}
                  <div className="mobile-menu-hamburger mobile-menu-hamburger-white d-md-block d-lg-none">
                    <Link to="javascript:void(0)">
                      <span>Menu</span>
                      <i className="icon ion-android-menu" />
                    </Link>
                  </div>
                  {/* Mobile Menu Hamburger End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top End */}
        {/* Mobile Menu Start */}
        <div className="mobile-menu-wrapper">
          <div className="offcanvas-overlay" />
          {/* Mobile Menu Inner Start */}
          <div className="mobile-menu-inner">
            {/* Mobile Menu Inner Top Start */}
            <div className="mobile-menu-inner-top">
              {/* Mobile Menu Logo Start  */}
              <div className="logo-mobile">
                <img src="assets/images/logo/logo-black.png" alt="Logo" />
              </div>
              {/* Mobile Menu Logo End */}
              {/* Button Close Start */}
              <div className="offcanvas-btn-close">
                <i className="icofont-close-line" />
              </div>
              {/* Button Close End */}
            </div>
            {/* Mobile Menu Inner Top End */}
            {/* Mobile Menu Start */}
            <div className="mobile-navigation">
              <nav>
                <ul className="mobile-menu">
                  <li className="has-children">
                    <Link to="#">About</Link>
                  </li>
                  <li className="has-children">
                    <Link to="#">
                      Panels{" "}
                      <i className="icofont-rounded-down" aria-hidden="true" />
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Q-Cells Panels</Link>
                      </li>
                      <li>
                        <Link to="#">Canadian Solar</Link>
                      </li>
                      <li>
                        <Link to="#">LG Panels</Link>
                      </li>
                      <li>
                        <Link to="#">Jinko</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="#">
                      Inverter{" "}
                      <i className="icofont-rounded-down" aria-hidden="true" />
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Fronius</Link>
                      </li>
                      <li>
                        <Link to="#">ABB</Link>
                      </li>
                      <li>
                        <Link to="#">SMA </Link>
                      </li>
                      <li>
                        <Link to="#">Growatt </Link>
                      </li>
                      <li>
                        <Link to="#">Sungrow</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="#">
                      Packages{" "}
                      <i className="icofont-rounded-down" aria-hidden="true" />
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Residential</Link>
                      </li>
                      <li>
                        <Link to="#">Commercial</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Gallery</Link>
                  </li>
                  <li>
                    <Link to="#">Finance Options</Link>
                  </li>
                  <li>
                    <Link to="#">Contacts</Link>
                  </li>
                  <li>
                    <Link to="#">Consumer Guide</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Mobile Menu End */}
          </div>
          {/* Mobile Menu Inner End */}
        </div>
        {/* Mobile Menu End */}
      </div>
      {/* Header Section End */}
    </>

  );
};

export default Navbar;
