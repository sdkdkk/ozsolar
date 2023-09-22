import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setavtivedata, setavtivemenu }) => {
  const [ActiveLink, setActiveLink] = useState("");
  const location = useLocation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => setMobileMenuOpen(!isMobileMenuOpen);
  console.log(location);
  useEffect(() => {
    const storedActiveLink = localStorage.getItem("activeLink");
    setActiveLink(storedActiveLink || location.pathname);
  }, [location]);

  const handleMenuItemClick = (link) => {
    setActiveLink(link);
    localStorage.setItem("activeLink", link);
  };

  const [data, setdata] = useState([]);
  const [FirstdropdownOpen, setFirstDropdownOpen] = useState(false);
  const handleDropdownToggle = () => setFirstDropdownOpen(!FirstdropdownOpen);

  const [SecondDropdown, setSecondDropdown] = useState(false);
  const DropdownToggle = () => setSecondDropdown(!SecondDropdown);

  const [ThirdDropdown, setThirdDropdown] = useState(false);
  const LastDropdownToggle = () => setThirdDropdown(!ThirdDropdown);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      let headersList = {
        Accept: "*/*",
      };

      let reqOptions = {
        url: "http://localhost:5000/api/admin/cmsall",
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      setdata(response.data.document);
    } catch (error) {}
  };
  data.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
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
                    <Link
                      className={ActiveLink === "/" ? "active" : ""}
                      to="/"
                      onClick={() => {
                        handleMenuItemClick("/");
                        setavtivemenu("");
                        setavtivedata(0);
                      }}
                    >
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
                        {data.map((el, i) => {
                          return (
                            <li key={i}>
                              {!el?.result?.length > 0 ? (
                                <Link
                                  className={
                                    ActiveLink === "/" + el.name ? "active" : ""
                                  }
                                  to={"/" + el.name}
                                  onClick={() => {
                                    handleMenuItemClick("/" + el.name);
                                    setavtivemenu("");
                                    setavtivedata(0);
                                  }}
                                >
                                  {el.name}
                                </Link>
                              ) : (
                                <Link
                                  className={
                                    ActiveLink === "/" + el.name ? "active" : ""
                                  }
                                  onClick={() => {
                                    handleMenuItemClick("/" + el.name);
                                    setavtivemenu("");
                                    setavtivedata(0);
                                  }}
                                >
                                  {el.name}
                                </Link>
                              )}
                              {el?.result?.length > 0 && (
                                <ul className="submenu">
                                  {el.result.map((e, i) => {
                                    return (
                                      <li key={i}>
                                        <Link
                                          to={"/" + el.name + "/?" + e.title}
                                          onClick={() => {
                                            handleMenuItemClick(e.title);
                                            setavtivemenu(e.title);
                                            setavtivedata(0);
                                          }}
                                        >
                                          {e.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                        {/* <li>
                          <Link
                            className={ActiveLink === "/about" ? "active" : ""}
                            to="/about"
                            onClick={() => handleMenuItemClick("/about")}
                          >
                            About
                          </Link>
                        </li>
                        <li
                          className={ActiveLink === "/panels" ? "active" : ""}
                        >
                          <Link
                            className={ActiveLink === "/panels" ? "active" : ""}
                            to="/panels"
                            onClick={() => handleMenuItemClick("/panels")}
                          >
                            Panels
                          </Link>
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
                          <Link
                            className={
                              ActiveLink === "/inverter" ? "active" : ""
                            }
                            to="/inverter"
                            onClick={() => handleMenuItemClick("/inverter")}
                          >
                            Inverter
                          </Link>
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
                          <Link
                            className={ActiveLink === "#" ? "active" : ""}
                            to="#"
                            onClick={() => handleMenuItemClick("#")}
                          >
                            Packages
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/residential">Residential</Link>
                            </li>
                            <li>
                              <Link to="/commercial">Commercial</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            className={
                              ActiveLink === "/gallary" ? "active" : ""
                            }
                            to="/gallary"
                            onClick={() => handleMenuItemClick("/gallary")}
                          >
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              ActiveLink === "/finance" ? "active" : ""
                            }
                            to="/finance"
                            onClick={() => handleMenuItemClick("/finance")}
                          >
                            Finance Options
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              ActiveLink === "/contact" ? "active" : ""
                            }
                            to="/contact"
                            onClick={() => handleMenuItemClick("/contact")}
                          >
                            Contacts
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={
                              ActiveLink === "/consumer" ? "active" : ""
                            }
                            to="/consumer"
                            onClick={() => handleMenuItemClick("/consumer")}
                          >
                            Consumer Guide
                          </Link>
                        </li> */}
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
                    <Link to="#" onClick={handleMobileMenuToggle}>
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
        <div
          className={`mobile-menu-wrapper ${isMobileMenuOpen ? "open" : ""}`}
        >
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
              <div
                className="offcanvas-btn-close"
                onClick={handleMobileMenuToggle}
              >
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
                    <Link to="/about">About</Link>
                  </li>
                  <li className="has-children">
                    <Link to="/panels" onClick={handleDropdownToggle}>
                      Panels{" "}
                      <i
                        className={`icofont-rounded-${
                          FirstdropdownOpen ? "up" : "down"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                    {FirstdropdownOpen && (
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
                    )}
                  </li>
                  <li className="has-children">
                    <Link to="/inverter" onClick={DropdownToggle}>
                      Inverter{" "}
                      <i
                        className={`icofont-rounded-${
                          SecondDropdown ? "up" : "down"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                    {SecondDropdown && (
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
                    )}
                  </li>
                  <li className="has-children">
                    <Link onClick={LastDropdownToggle} to="/packages">
                      Packages{" "}
                      <i
                        className={`icofont-rounded-${
                          ThirdDropdown ? "up" : "down"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                    {ThirdDropdown && (
                      <ul className="dropdown">
                        <li>
                          <Link to="#">Residential</Link>
                        </li>
                        <li>
                          <Link to="#">Commercial</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to="/gallary">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/finance">Finance Options</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contacts</Link>
                  </li>
                  <li>
                    <Link to="/consumer">Consumer Guide</Link>
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
