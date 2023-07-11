import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import "odometer/themes/odometer-theme-default.css";
import Swiper from 'swiper';

const About = () => {
  const [odometerValue, setOdometerValue] = useState(0);
  const [odometerValue1, setOdometerValue1] = useState();

  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(11);
      setOdometerValue1(45000);
    }, 1000);
  }, []);

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Configure the options for the slider
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        prevEl: '.client-crousel-prev',
        nextEl: '.client-crousel-next',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Destroy the swiper instance when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);



  return (
    <>
      <div className=" disabled-onepage-scroll">
        <div
          className="section about-banner-image"
          style={{
            backgroundImage: "url(assets/images/about/large-about.jpg)",
          }}>
          <div className="container">
            <div className="row">
              <div className="content">
                <div>
                  <h1 className="title">About OZ</h1>
                  <h5 className="text-white">
                    We would love to advice you on your solar needs.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about Section Start */}
        <div className="section section-padding-top section-padding-bottom">
          <div className="container">
            <div className="row mb-n10">
              <div className="col-lg-12 mb-10 col-md-12 align-self-center order-1 order-lg-2">
                <div className="history-wrapper">
                  <h1 className="title">OUR STORY</h1>
                  <div className="history-content">
                    <h4 className="subtitle">
                      Powering your business Oz Need Solar
                    </h4>
                    <p className="description">
                      Oz solar needs exist to happily serve our community with
                      the incredible experience of benefiting from the power of
                      the sun at their homes or businesses. Since our business
                      is built on happy customers who are eager to refer their
                      friends and family, it’s in our best interest to provide
                      outstanding customer satisfaction and service in every
                      aspect of installation. Our team is dedicated to making
                      sure that quality is built into everything we do and that
                      our customers always receive the best products and
                      services, keeping them informed every step of the way. All
                      of our installers have undergone rigorous training through
                      the clean energy council.
                    </p>
                    <p>
                      Our products are backed by warranties held in Australia,
                      our experience and knowledge set us apart from the
                      competition and our commitment to serving the customer’s
                      needs is paramount.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about Section End */}
        {/* Work Section Start */}
        <div className="section work-image-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 box-title-content d-flex align-items-center">
                <div className="history-wrapper">
                  <h1 className="title text-white">Why live with Solar?</h1>
                  <div className="history-content text-white">
                    <p className="description text-white">
                      Let's face it – you’re not going to stop using electricity
                      anytime soon. But you can choose how much you’re going to
                      spend by making the smarter choice to go solar. Electric
                      rates keep going up. Instead of paying more every year,
                      lock in your rate now and enjoy powering your home or
                      business for a lot less than what you’re currently paying.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="solarpanel-box-content">
                      <div className="aboutpage-icon mb-2">
                        <img src="assets/images/about/abouticon1.svg" alt="" />
                      </div>
                      <h3 className="f-700">
                        <span className="odometer" />
                        <Odometer
                          value={odometerValue}
                          format="(.ddd),dd"
                          theme="default"
                        />
                        + Years
                      </h3>
                      <p>of Experience &amp; Record</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="solarpanel-box-content">
                      <div className="aboutpage-icon mb-2">
                        <img src="assets/images/about/abouticon2.svg" alt="" />
                      </div>
                      <h3 className="f-700">
                        <span className="odometer" />
                        <Odometer
                          value={odometerValue1}
                          format="(,ddd),dd"
                          theme="default"
                        />
                        +
                      </h3>
                      <p>Solar panels Installed</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="solarpanel-box-content">
                      <div className="aboutpage-icon mb-2">
                        <img src="assets/images/about/abouticon3.svg" alt="" />
                      </div>
                      <h3 className="f-700">Approved Retailer</h3>
                      <p>CEC ACCREDITED</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="solarpanel-box-content">
                      <div className="aboutpage-icon mb-2">
                        <img src="assets/images/about/abouticon4.svg" alt="" />
                      </div>
                      <h3 className="f-700">0%</h3>
                      <p>Interest Payment Plan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Work Section End */}
        {/* Services Section Start */}
        <div className="section section-padding-top section-padding-bottom bg-dark">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="service-inner-container">
                  {/* Service Block Start */}
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="icon-link-bottom">
                        <img src="assets/images/about/abouticon5.svg" alt="" />
                      </div>
                      <p className="text-white">
                        Call us on 1300 058 561 to arrange a site inspection or
                        email us on sales@ozsolarneeds.com.au
                      </p>
                    </div>
                  </div>
                  {/* Service Block End */}
                  {/* Service Block Start */}
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="icon-link-bottom">
                        <img src="assets/images/about/abouticon6.svg" alt="" />
                      </div>
                      <p className="text-white">
                        we will design the solar system to suit your needs and
                        discuss the different packages option based on your
                        electricity usage.
                      </p>
                    </div>
                  </div>
                  {/* Service Block End */}
                  {/* Service Block Start */}
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="icon-link-bottom">
                        <img src="assets/images/about/abouticon7.svg" alt="" />
                      </div>
                      <p className="text-white">
                        We will organize a free site inspection for the correct
                        designing of your solar system.
                      </p>
                    </div>
                  </div>
                  {/* Service Block End */}
                  {/* Service Block Start */}
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="icon-link-bottom">
                        <img src="assets/images/about/abouticon8.svg" alt="" />
                      </div>
                      <p className="text-white">
                        After your application has been approved by the
                        distributor we will contact you to organize the date and
                        time of installation.
                      </p>
                    </div>
                  </div>
                  {/* Service Block End */}
                  {/* Service Block Start */}
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="icon-link-bottom">
                        <img src="assets/images/about/abouticon9.svg" alt="" />
                      </div>
                      <p className="text-white">
                        Once you selected the system package suit your
                        requirements, we will submit your application to the
                        electricity distributor.
                      </p>
                    </div>
                  </div>
                  {/* Service Block End */}
                  {/* Service Block Start */}
                  <div className="service-block">
                    <div className="inner-box">
                      <div className="icon-link-bottom">
                        <img src="assets/images/about/abouticon10.svg" alt="" />
                      </div>
                      <p className="text-white">
                        The final stage would involve the replacement of the
                        utility meter, which is normally organized by the
                        customer.
                      </p>
                    </div>
                  </div>
                  {/* Service Block End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Section End */}
        {/* Customer’s review Section Start */}
        <div className="section section-padding-top section-padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12 position-relative">
            <div className="section-title client-title">
              <h2 className="title">Customer's review</h2>
              <p className="mt-1">What they say about us</p>
            </div>
            <div className="client-crousel">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-client-wrapper">
                      <div className="client-thumb-icon">
                        <div className="thumb">
                          <img src="assets/images/home/review.png" alt="" />
                        </div>
                      </div>
                      <div className="client-content">
                        <p>
                          We, the Hooper Taxation Services Pty Ltd, (Ken and
                          Dionesia Goebel) would like to thank you "Oz Solar
                          Needs" for your unbelievable, professional, honest,
                          friendly and reliable service. You did an amazing job
                          for our business and residential. What admire and amaze
                          us the most is Jimmy's unconditional helping hand and
                          friendly advice.
                        </p>
                        <h6 className="name">
                          <a href="#">
                            Ken and Dionesia Goebel | Laidley Heights
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/* Add more swiper-slide elements for additional testimonials */}
                </div>
                <div className="swiper-pagination" />
                <div className="client-crousel-prev swiper-button-prev">
                  <i className="ion-ios-arrow-thin-left" />
                </div>
                <div className="client-crousel-next swiper-button-next">
                  <i className="ion-ios-arrow-thin-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer />
        {/* End Main Footer */}
        {/* Scroll Top Start */}
        <Link href="#" className="scroll-top" id="scroll-top">
          <i className="arrow-top icofont-circled-up" />
          <i className="arrow-bottom icofont-circled-up" />
        </Link>
        {/* Scroll Top End */}
      </div>
      {/* Project Banner Section Start */}
    </>
  );
};

export default About;
