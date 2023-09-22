import React, { useEffect } from "react";
import Swiper from "swiper";
import { FullPage, Slide } from "react-full-page";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Slider from "react-slick";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const Home = ({ banars, data }) => {
  const dispatch = useDispatch();
  const [CustomerReviews, setCustomerReviews] = useState([]);
  const [BRAND, setBRAND] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const banars12 = banars?.filter((e) => {
    return e.menuName === "Home";
  });
  console.log("banars12", data);
  useEffect(() => {
    getCustomer();
    getBRAND();
  }, []);
  const getCustomer = async () => {
    let reqOptions = {
      url: "http://localhost:5000/api/admin/testimonialall",
      method: "GET",
    };

    let response = await axios.request(reqOptions);
    setCustomerReviews(response.data.document);
  };
  const getBRAND = async () => {
    let reqOptions = {
      url: "http://localhost:5000/api/admin/brandall",
      method: "GET",
    };

    let response = await axios.request(reqOptions);
    setBRAND(response.data.document);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.MobileNo) {
      errors.MobileNo = "Required";
    }
    if (!values.Message) {
      errors.Message = "Required";
    }
    if (!values.PostalCode) {
      errors.PostalCode = "Required";
    }
    if (!values.Address) {
      errors.Address = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      MobileNo: "",
      PostalCode: "",
      Address: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        let bodyContent = {
          name: values.name,
          email: values.email,
          mobile_no: values.MobileNo,
          postalCode: values.PostalCode,
          address: values.Address,
          message: values.Message,
        };

        let reqOptions = {
          url: "http://localhost:5000/api/contactinquary",
          method: "POST",
          data: bodyContent,
        };

        let response = await axios.request(reqOptions);
        console.log("response", response);
        if (response.data.status === 1) {
          toast.success(response.data.message);
          formik.resetForm();
        }
      } catch (error) {
        toast.success(error);
      }
    },
  });
  const handalchange = (e) => {
    const { name, value, checked, files } = e.target;
    if (name !== "MobileBannerImage") {
      if (name !== "BannerImage") {
        if (name === "isActive") {
          setdata({ ...data, [name]: checked });
        } else {
          setdata({ ...data, [name]: value });
        }
      } else {
        setdata({ ...data, [name]: files[0] });
      }
    } else {
      setdata({ ...data, [name]: files[0] });
    }
  };
  useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".client-crousel-next",
        prevEl: ".client-crousel-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  useEffect(() => {
    const slider = new Swiper(".hero-slider .swiper-container", {
      loop: true,
      navigation: {
        prevEl: ".home-slider-prev",
        nextEl: ".home-slider-next",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const prevButton = document.querySelector(".home-slider-prev");
    const nextButton = document.querySelector(".home-slider-next");

    prevButton?.addEventListener("click", () => {
      slider.slidePrev();
    });

    nextButton?.addEventListener("click", () => {
      slider.slideNext();
    });

    return () => {
      prevButton?.removeEventListener("click", () => {
        slider.slidePrev();
      });

      nextButton?.removeEventListener("click", () => {
        slider.slideNext();
      });
    };
  }, []);

  function renderStars(stars, color) {
    const totalStars = 5; // Assuming 5 is the maximum number of stars
    const fullStars = Math.floor(stars);
    const halfStar = stars - fullStars >= 0.5;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

    const starStyle = { color: color };

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <i
              className="fas fa-star"
              key={`star-${stars}-full-${index}`} // Now the key includes the index
              style={starStyle}
            />
          ))}
        {halfStar && <i className="fas fa-star-half-alt" style={starStyle} />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <i
              className="far fa-star"
              key={`star-${stars}-empty-${index}`} // Now the key includes the index
              style={starStyle}
            />
          ))}
      </>
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrow: !true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          arrow: !true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          arrow: !true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrow: !true,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          dots: true,
        },
      },
    ],
  };
  CustomerReviews.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
  BRAND.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <section className="section" id="page1">
            <div
              className="position-relative overflow-hidden"
              style={{
                top: "-20px",
              }}
            >
              <div className="hero-slider">
                {banars12?.length > 0 && (
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {banars12?.map((e, i) => {
                        return (
                          <div className="hero-slide-item swiper-slide" key={i}>
                            <div className="hero-slide-bg">
                              <img
                                src={
                                  process.env.REACT_APP_API_BASE_URL +
                                  e?.banner_image
                                }
                                alt=""
                              />
                            </div>
                            <div
                              className=" "
                              style={{
                                position: "absolute",
                                width: "100%",
                                margin: "auto",
                              }}
                            >
                              <div
                                className="hero-slide-content "
                                style={{
                                  width: "85%",
                                  margin: "auto",
                                }}
                              >
                                <h2
                                  className="title pt-5"
                                  style={{ width: "55%" }}
                                >
                                  {e?.title}
                                </h2>
                                <p className="pt-4">{e?.description}</p>
                                <button
                                  class="btn btn-primary mt-0 px-5 py-4"
                                  onClick={handleShow}
                                >
                                  Book Your Free Consultation
                                </button>
                              </div>
                            </div>
                            <div className="hero-slide-item swiper-slide">
                              <div className="hero-slide-bg">
                                <img
                                  src={
                                    process.env.REACT_APP_API_BASE_URL +
                                    banars12[0]?.banner_image
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="swiper-pagination d-md-none" />
                    <div className="home-slider-prev swiper-button-prev d-md-flex d-none">
                      <i className="ion-ios-arrow-thin-left" />
                    </div>
                    <div className="home-slider-next swiper-button-next d-md-flex d-none">
                      <i className="ion-ios-arrow-thin-right" />
                    </div>
                    <div className="hero-slider-social">
                      <Link href="#">
                        <i className="icofont-scroll-down" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="page2 pt-5 mt-4">
            <div className="section ">
              <div className="container">
                <div className="row mb-n10">
                  <div className="col-lg-6 mb-10 col-md-12 align-self-center">
                    <div className="history-wrapper">
                      <h1 className="title align-items-center d-flex">
                        Oz Need Solar <span className="orange-color" />{" "}
                        <span className="title-right">
                          Powering your business
                        </span>
                      </h1>
                      <div className="history-content">
                        <h4 className="subtitle">
                          Oz solar needs exist to happily serve our community
                          with the incredible experience of benefiting from the
                          power of the sun at their homes or businesses. Since
                          our business is built on happy customers who are eager
                          to refer their friends and family, it’s in our best
                          interest to provide outstanding customer satisfaction
                          and service in every aspect of installation.
                          <p />
                          <p>
                            Our team is dedicated to making sure that quality is
                            built into everything we do and that our customers
                            always receive the best products and services,
                            keeping them informed every step of the way. All of
                            our installers have undergone rigorous training
                            through the clean energy council.{" "}
                          </p>
                        </h4>
                      </div>
                      <div className="mt-5">
                        <a href="##" className="btn btn-primary">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-10 col-md-12">
                    <div className="row">
                      <div className="col-lg-6 col-sm-6 col-12 mb-5">
                        <div className="about-box about-bg01">
                          <h4 className="text-white">Powerfull Strategy</h4>
                          <p className="text-white">
                            Facilities meet high security requirements and are
                            certified
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12 mb-5">
                        <div className="about-box orange-box">
                          <div className="row mx-auto g-1">
                            <div className="col-lg-4 col-4">
                              <h1 className="year-text">9</h1>
                            </div>
                            <div className="col-lg-7 col-7">
                              <h6 className="text-white mb-0">More Than</h6>
                              <h1 className="text-white mb-0">YEARS</h1>
                              <h6 className="text-white mb-0">of experience</h6>
                            </div>
                            <div className="col-lg-12 col-12">
                              <h6 className="text-white mt-3 mb-0">
                                4000+ System Installed
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12 mb-5">
                        <div className="about-box about-bg03">
                          <h4 className="text-white">Award Winning</h4>
                          <p className="text-white">
                            International supply chains involves of unknown
                            risks and Challenges.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12 mb-5">
                        <div className="about-box about-bg04">
                          <h4 className="text-white">Accurate Testing</h4>
                          <p className="text-white">
                            Utilising latest processing solutions, and decades
                            of work experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </Slide>
            <Slide> */}
          <section className="page3">
            <div className="section solarpanel-works-bg h-100">
              <div className="container-fluid  h-100">
                <div
                  className="row "
                  style={{
                    height: "100%",
                  }}
                >
                  <div
                    className="col-lg-6 align-items-center solar-left-box py-5"
                    style={{
                      background: "rgb(0 0 0 / 42%)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      zIndex: "10",
                      alignItems: "center",
                    }}
                  >
                    <div className="section-title text-center">
                      <h2 className="title text-white pt-5">
                        How Solar Panel Works?
                      </h2>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="solarpanel-box">
                          <div className="solar-icon mb-2">
                            <img
                              src="assets/images/home/solar-icon01.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="text-white">Solar panels</h4>
                          <p>
                            Photovoltaic cells convert sunlight into DC
                            electricity
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="solarpanel-box">
                          <div className="solar-icon mb-2">
                            <img
                              src="assets/images/home/solar-icon02.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="text-white">Inverter</h4>
                          <p>
                            DC cuurent flows into the inverter which convert DC
                            power to AC power...
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="solarpanel-box">
                          <div className="solar-icon mb-2">
                            <img
                              src="assets/images/home/solar-icon03.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="text-white">Electric Meter</h4>
                          <p>
                            AC Power flows from the inverter into the breaker
                            box, which directs the current to any ap...{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-12">
                        <div className="solarpanel-box">
                          <div className="solar-icon mb-2">
                            <img
                              src="assets/images/home/solar-icon04.svg"
                              alt=""
                            />
                          </div>
                          <h4 className="text-white">Performance Monitoring</h4>
                          <p>View energy production and usage online.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </section>
          {/* </Slide>
            <Slide> */}
          <section className="page4">
            <div className="section solar-installation-bg h-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto align-items-center">
                    <div className="section-title text-center">
                      <h6 className="mb-2 text-white">Easy process for</h6>
                      <h2 className="title text-white">Solar Installation</h2>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 mb-5">
                        <div className="solar-installation-box">
                          <div className="installation-icon">
                            <img
                              src="assets/images/icon/installation-icon01.svg"
                              alt=""
                            />
                          </div>
                          <div className="installation-text">
                            <p>
                              Call us on 1300 058 561 to arrange a site
                              inspection or email us on
                              <a
                                target="_blank"
                                href="mailto:sales@ozsolarneeds.com.au"
                              >
                                sales@ozsolarneeds.com.au
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-5">
                        <div className="solar-installation-box">
                          <div className="installation-icon">
                            <img
                              src="assets/images/icon/installation-icon02.svg"
                              alt=""
                            />
                          </div>
                          <div className="installation-text">
                            <p>
                              we will design the solar system to suit your needs
                              and discuss the different packages option based on
                              your electricity usage.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-5">
                        <div className="solar-installation-box">
                          <div className="installation-icon">
                            <img
                              src="assets/images/icon/installation-icon03.svg"
                              alt=""
                            />
                          </div>
                          <div className="installation-text">
                            <p>
                              We will organize a free site inspection for the
                              correct designing of your solar system.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-5">
                        <div className="solar-installation-box">
                          <div className="installation-icon">
                            <img
                              src="assets/images/icon/installation-icon04.svg"
                              alt=""
                            />
                          </div>
                          <div className="installation-text">
                            <p>
                              Once you selected the system package suit your
                              requirements, we will submit your application to
                              the electricity distributor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-5">
                        <div className="solar-installation-box">
                          <div className="installation-icon">
                            <img
                              src="assets/images/icon/installation-icon05.svg"
                              alt=""
                            />
                          </div>
                          <div className="installation-text">
                            <p>
                              After your application has been approved by the
                              distributor we will contact you to organize the
                              date and time of installation.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-5">
                        <div className="solar-installation-box">
                          <div className="installation-icon">
                            <img
                              src="assets/images/icon/installation-icon06.svg"
                              alt=""
                            />
                          </div>
                          <div className="installation-text">
                            <p>
                              The final stage would involve the replacement of
                              the utility meter, which is normally organized by
                              the customer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6"></div>
                </div>
              </div>
            </div>
          </section>
          {/* </Slide>
            <Slide> */}
          <section className="section" id="page5">
            <div className="section review-section h-100">
              <div className="container">
                <div className="row">
                  <div className="col-12 position-relative">
                    <div className="section-title client-title">
                      <h2 className="title">Customer’s review</h2>
                      <p className="mt-1">What they say about us</p>
                    </div>
                    <div className="client-crousel">
                      <Slider {...settings}>
                        {CustomerReviews &&
                          CustomerReviews.map((data, index) => {
                            return (
                              <div className="p-2" key={index}>
                                <div className="single-client-wrapper">
                                  <div className="client-thumb-icon">
                                    <div className="thumb">
                                      {renderStars(5, "red")}
                                    </div>
                                  </div>
                                  <div className="client-content">
                                    <p>{data.name}</p>
                                    <h6 className="name">
                                      <Link href="#">{data.text}</Link>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </Slide> */}
          <Link href="#"></Link>
          {/* <Slide> */}
          <section className="section" id="page6">
            <div className="section powered-logo-bg h-100">
              <div className="container">
                <div className="row">
                  <div className="col-12 position-relative">
                    <div className="section-title client-title">
                      <h2 className="title text-white">We are Powered By</h2>
                      <p className="text-white mt-2">
                        We source together the most advanced technology and
                        products from leading brands
                      </p>
                    </div>
                    <div className="brand-logo-carousel">
                      <Slider {...settings}>
                        {BRAND &&
                          BRAND.map((data, index) => {
                            return (
                              <div className="p-2" key={index}>
                                <img
                                  src={data.brand_image}
                                  alt="Brand Logo 1"
                                  className="img-fulid"
                                />
                              </div>
                            );
                          })}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </Slide>
            <Slide> */}
          <section className="section" id="page7">
            <div className="section talk-section h-100">
              <div className="container-full  h-100">
                <div className="row  h-100">
                  <div className="col-lg-5">
                    <img
                      className="w-100  h-100"
                      src="assets/images/home/contact-us.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7 align-items-center d-flex">
                    <div className="lets-talk-w">
                      <div className="section-title">
                        <h6 className="mb-2">Easy process for</h6>
                        <h2 className="title">Let’s Talk</h2>
                      </div>
                      <div className="contact-form">
                        <form onSubmit={formik.handleSubmit}>
                          <div className="row lets-space">
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                              <input
                                className="input-item"
                                type="text"
                                name="name"
                                placeholder="Enter your name..."
                                onChange={formik.handleChange}
                                value={formik.values.name}
                              />{" "}
                              {formik.errors.name ? (
                                <div className="text-danger">
                                  {formik.errors.name}
                                </div>
                              ) : null}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                              <input
                                className="input-item"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                              />{" "}
                              {formik.errors.email ? (
                                <div className="text-danger">
                                  {formik.errors.email}
                                </div>
                              ) : null}
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                              <input
                                className="input-item"
                                type="text"
                                name="MobileNo"
                                placeholder="Mobile No"
                                onChange={formik.handleChange}
                                value={formik.values.MobileNo}
                              />
                              {formik.errors.MobileNo ? (
                                <div className="text-danger">
                                  {formik.errors.MobileNo}
                                </div>
                              ) : null}
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                              <input
                                className="input-item"
                                type="text"
                                name="PostalCode"
                                placeholder="Postal Code"
                                onChange={formik.handleChange}
                                value={formik.values.PostalCode}
                              />
                              {formik.errors.PostalCode ? (
                                <div className="text-danger">
                                  {formik.errors.PostalCode}
                                </div>
                              ) : null}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                              <input
                                className="input-item"
                                type="text"
                                name="Address"
                                placeholder="Address"
                                onChange={formik.handleChange}
                                value={formik.values.Address}
                              />
                              {formik.errors.Address ? (
                                <div className="text-danger">
                                  {formik.errors.Address}
                                </div>
                              ) : null}
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-10">
                              <div className="input-item">
                                <textarea
                                  className="textarea-item"
                                  name="Message"
                                  placeholder="Message"
                                  onChange={formik.handleChange}
                                  value={formik.values.Message}
                                />
                                {formik.errors.Message ? (
                                  <div className="text-danger">
                                    {formik.errors.Message}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                              <button
                                className="btn btn-primary"
                                type="submit"
                                name="submit"
                                id="submit"
                              >
                                <span className="txt">Send Message</span>
                              </button>
                            </div>
                            <p className="col-8 form-message mb-0" />
                          </div>
                        </form>
                        <p className="text-center form-messege" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </Slide>
            <Slide> */}
          <section className="section" id="page8">
            <div className="section contact-home-section h-100">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-5 mx-auto">
                    <div className="contact-address">
                      <div className="row section-title align-items-center">
                        <div className="col-lg-8 col-8">
                          <div className="">
                            <h2 className="title">Contact Us </h2>
                            <h6 className="mb-2">For any queries</h6>
                          </div>
                        </div>
                        <div className="col-lg-4 col-4 text-end">
                          <img
                            className="fleg"
                            src="./assets/images/home/fleg.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="contact-inner-box">
                        <i className="icofont-location-pin" />
                        <p>
                          <strong>Address</strong>
                          <br />
                          {data?.length > 0 ? data[0]?.office_address : null}
                        </p>
                      </div>
                      <div className="contact-inner-box">
                        <i className="icofont-phone" />
                        <p>
                          <strong>Phone</strong>
                          <br /> 1300-058-561
                        </p>
                      </div>
                      <div className="contact-inner-box">
                        <i className="icofont-email" />
                        <p>
                          <strong>Email</strong>
                          <br />
                          <Link
                            target="_blank"
                            href="mailto:sales@ozsolarneeds.com.au"
                          >
                         {data?.length > 0 ? data[0]?.Email : null}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </Slide>
            <Slide style={{ height: "auto" }}> */}
          <section
            className="section"
            id="page9"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          ></section>
          {/* </Slide> */}
          {/* </FullPage> */}

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Inquiry</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="contact-form">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row lets-space">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group my-2">
                      <input
                        className="input-item"
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />{" "}
                      {formik.errors.name ? (
                        <div className="text-danger">{formik.errors.name}</div>
                      ) : null}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group my-2">
                      <input
                        className="input-item"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />{" "}
                      {formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-group my-2">
                      <input
                        className="input-item"
                        type="text"
                        name="MobileNo"
                        placeholder="Mobile No"
                        onChange={formik.handleChange}
                        value={formik.values.MobileNo}
                      />
                      {formik.errors.MobileNo ? (
                        <div className="text-danger">
                          {formik.errors.MobileNo}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group my-2">
                      <input
                        className="input-item"
                        type="text"
                        name="PostalCode"
                        placeholder="Postal Code"
                        onChange={formik.handleChange}
                        value={formik.values.PostalCode}
                      />
                      {formik.errors.PostalCode ? (
                        <div className="text-danger">
                          {formik.errors.PostalCode}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group my-2">
                      <input
                        className="input-item"
                        type="text"
                        name="Address"
                        placeholder="Address"
                        onChange={formik.handleChange}
                        value={formik.values.Address}
                      />
                      {formik.errors.Address ? (
                        <div className="text-danger">
                          {formik.errors.Address}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-2">
                      <div className="input-item">
                        <textarea
                          className="textarea-item"
                          name="Message"
                          placeholder="Message"
                          onChange={formik.handleChange}
                          value={formik.values.Message}
                        />
                        {formik.errors.Message ? (
                          <div className="text-danger">
                            {formik.errors.Message}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group m-0 p-0">
                      {/* <button
                    className="btn btn-primary"
                    type="submit"
                    name="submit"
                    id="submit"
                  >
                    <span className="txt">Send Message</span>
                  </button> */}
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button type="submit" name="submit" variant="primary">
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </div>
                    <p className="col-8 form-message mb-0" />
                  </div>
                </form>
                <p className="text-center form-messege" />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Home;
