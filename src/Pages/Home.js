import React, { useEffect } from "react";
import Swiper from "swiper";
// import 'swiper/css/swiper.css';
import { FullPage, Slide } from "react-full-page";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";


const Home = () => {




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
    const slider = new Swiper('.hero-slider .swiper-container', {
      loop: true,
      navigation: {
        prevEl: '.home-slider-prev',
        nextEl: '.home-slider-next',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });


    const prevButton = document.querySelector('.home-slider-prev');
    const nextButton = document.querySelector('.home-slider-next');

    prevButton.addEventListener('click', () => {
      slider.slidePrev();
    });

    nextButton.addEventListener('click', () => {
      slider.slideNext();
    });


    return () => {
      prevButton.removeEventListener('click', () => {
        slider.slidePrev();
      });

      nextButton.removeEventListener('click', () => {
        slider.slideNext();
      });
    };
  }, []);


  return (
    <>
      <div className="wrapper">
        <div className="main">
          <FullPage>
            <Slide>
              <section className="section" id="page1">
                {/* Hero Section Start */}
                <div className="position-relative overflow-hidden">
                  {/* Hero Slider Start */}
                  <div className="hero-slider">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        {/* Hero Slider Item Start */}
                        <div className="hero-slide-item swiper-slide">
                          {/* Hero Slider Bg Image Start */}
                          <div className="hero-slide-bg">
                            <img
                              src="assets/images/slider/slide-1.jpg"
                              alt="SliderImage"
                            />
                          </div>
                          {/* Hero Slider Bg image End */}
                          {/* Hero Slider Content Start */}
                          <div className="container">
                            <div className="hero-slide-content">
                              <h2 className="title">
                                SOLAR POWER
                                <br /> POWER THAT SHINES
                              </h2>
                              <p>
                                Our solar modules help accelerate the clean
                                energy transition, making the world healthier
                                and more sustainable.
                              </p>
                            </div>
                          </div>
                          {/* Hero Slider Content End */}
                        </div>
                        {/* Hero Slider Item End */}
                        {/* Hero Slider Item Start */}
                        <div className="hero-slide-item swiper-slide">
                          {/* Hero Slider Bg Image Start */}
                          <div className="hero-slide-bg">
                            <img
                              src="assets/images/slider/slide-1.jpg"
                              alt=""
                            />
                          </div>
                          {/* Hero Slider Bg Image End */}
                          {/* Hero Slider Content Start */}
                          <div className="container">
                            <div className="hero-slide-content">
                              <h2 className="title">
                                SOLAR POWER
                                <br /> POWER THAT SHINES
                              </h2>
                              <p>
                                Our solar modules help accelerate the clean
                                energy transition, making the world healthier
                                and more sustainable.
                              </p>
                            </div>
                          </div>
                          {/* Hero Slider Content End */}
                        </div>
                        {/* Hero Slider Item End */}
                      </div>
                      {/* Swiper Pagination Start */}
                      <div className="swiper-pagination d-md-none" />
                      {/* Swiper Pagination End */}
                      {/* Swiper Navigation Start */}
                      <div className="home-slider-prev swiper-button-prev d-md-flex d-none">
                        <i className="ion-ios-arrow-thin-left" />
                      </div>
                      <div className="home-slider-next swiper-button-next d-md-flex d-none">
                        <i className="ion-ios-arrow-thin-right" />
                      </div>
                      {/* Swiper Navigation End */}
                      {/* Hero Slider Social Start */}
                      <div className="hero-slider-social">
                        <Link href="#">
                          <i className="icofont-scroll-down" />
                        </Link>
                      </div>
                      {/* Hero Slider Social End */}
                    </div>
                  </div>
                  {/* Hero Slider End */}
                </div>
                {/* Hero Section End */}
              </section>
            </Slide>
            <Slide>
              <section className="page2">
                {/* History Section Start */}
                <div className="section">
                  <div className="container">
                    <div className="row mb-n10">
                      <div className="col-lg-6 mb-10 col-md-12 align-self-center">
                        <div className="history-wrapper">
                          <h1 className="title align-items-center d-flex">
                            Oz Need Solar <span className="orange-color" />{" "}
                            <span className="title-right">Powering your business</span>
                          </h1>
                          <div className="history-content">
                            <h4 className="subtitle">
                              Oz solar needs exist to happily serve our community with the
                              incredible experience of benefiting from the power of the sun at
                              their homes or businesses. Since our business is built on happy
                              customers who are eager to refer their friends and family, it’s
                              in our best interest to provide outstanding customer
                              satisfaction and service in every aspect of installation.
                              <p />
                              <p>
                                Our team is dedicated to making sure that quality is built
                                into everything we do and that our customers always receive
                                the best products and services, keeping them informed every
                                step of the way. All of our installers have undergone rigorous
                                training through the clean energy council.{" "}
                              </p>
                            </h4>
                          </div>
                          <div className="mt-5">
                            <a href="#" className="btn btn-primary">
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
                                Facilities meet high security requirements and are certified
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
                                International supply chains involves of unknown risks and
                                Challenges.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-12 mb-5">
                            <div className="about-box about-bg04">
                              <h4 className="text-white">Accurate Testing</h4>
                              <p className="text-white">
                                Utilising latest processing solutions, and decades of work
                                experience.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* History Section End */}
              </section>
            </Slide>
            <Slide>
              <section className="page3">
                {/* Solar Panel Works Section Start */}
                <div className="section solarpanel-works-bg">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 align-items-center solar-left-box">
                        {/* Section Title Start */}
                        <div className="section-title text-center">
                          <h2 className="title text-white">How Solar Panel Works?</h2>
                        </div>
                        {/* Section Title End */}
                        <div className="row">
                          <div className="col-lg-6 col-sm-6 col-12">
                            <div className="solarpanel-box">
                              <div className="solar-icon mb-2">
                                <img src="assets/images/home/solar-icon01.svg" alt="" />
                              </div>
                              <h4 className="text-white">Solar panels</h4>
                              <p>Photovoltaic cells convert sunlight into DC electricity</p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-12">
                            <div className="solarpanel-box">
                              <div className="solar-icon mb-2">
                                <img src="assets/images/home/solar-icon02.svg" alt="" />
                              </div>
                              <h4 className="text-white">Inverter</h4>
                              <p>
                                DC cuurent flows into the inverter which convert DC power to
                                AC power...
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-12">
                            <div className="solarpanel-box">
                              <div className="solar-icon mb-2">
                                <img src="assets/images/home/solar-icon03.svg" alt="" />
                              </div>
                              <h4 className="text-white">Electric Meter</h4>
                              <p>
                                AC Power flows from the inverter into the breaker box, which
                                directs the current to any ap...{" "}
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-sm-6 col-12">
                            <div className="solarpanel-box">
                              <div className="solar-icon mb-2">
                                <img src="assets/images/home/solar-icon04.svg" alt="" />
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
                {/* Solar Panel Works Section End */}
              </section>
            </Slide>
            <Slide>
              <section className="page4">
                {/*  Solar Installation Section Start */}
                <div className="section solar-installation-bg">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 mx-auto align-items-center">
                        {/* Section Title Start */}
                        <div className="section-title text-center">
                          <h6 className="mb-2 text-white">Easy process for</h6>
                          <h2 className="title text-white">Solar Installation</h2>
                        </div>
                        {/* Section Title End */}
                        <div className="row">
                          <div className="col-lg-6 col-md-6 mb-5">
                            <div className="solar-installation-box">
                              <div className="installation-icon">
                                <img src="assets/images/icon/installation-icon01.svg" alt="" />
                              </div>
                              <div className="installation-text">
                                <p>
                                  Call us on 1300 058 561 to arrange a site inspection or
                                  email us on
                                  <a target="_blank" href="mailto:sales@ozsolarneeds.com.au">
                                    sales@ozsolarneeds.com.au
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 mb-5">
                            <div className="solar-installation-box">
                              <div className="installation-icon">
                                <img src="assets/images/icon/installation-icon02.svg" alt="" />
                              </div>
                              <div className="installation-text">
                                <p>
                                  we will design the solar system to suit your needs and
                                  discuss the different packages option based on your
                                  electricity usage.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 mb-5">
                            <div className="solar-installation-box">
                              <div className="installation-icon">
                                <img src="assets/images/icon/installation-icon03.svg" alt="" />
                              </div>
                              <div className="installation-text">
                                <p>
                                  We will organize a free site inspection for the correct
                                  designing of your solar system.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 mb-5">
                            <div className="solar-installation-box">
                              <div className="installation-icon">
                                <img src="assets/images/icon/installation-icon04.svg" alt="" />
                              </div>
                              <div className="installation-text">
                                <p>
                                  Once you selected the system package suit your requirements,
                                  we will submit your application to the electricity
                                  distributor.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 mb-5">
                            <div className="solar-installation-box">
                              <div className="installation-icon">
                                <img src="assets/images/icon/installation-icon05.svg" alt="" />
                              </div>
                              <div className="installation-text">
                                <p>
                                  After your application has been approved by the distributor
                                  we will contact you to organize the date and time of
                                  installation.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 mb-5">
                            <div className="solar-installation-box">
                              <div className="installation-icon">
                                <img src="assets/images/icon/installation-icon06.svg" alt="" />
                              </div>
                              <div className="installation-text">
                                <p>
                                  The final stage would involve the replacement of the utility
                                  meter, which is normally organized by the customer.
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
                {/*  Solar Installation Section End */}
              </section>

            </Slide>
            <Slide>
              <section className="section" id="page5">
                {/* Customer’s review Section Start */}
                <div className="section review-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 position-relative">
                        <div className="section-title client-title">
                          <h2 className="title">Customer’s review</h2>
                          <p className="mt-1">What they say about us</p>
                        </div>
                        <div className="client-crousel">
                          <div className="swiper-container">
                            <div className="swiper-wrapper">
                              {/* Reviews Set 1 */}
                              <div className="swiper-slide">
                                <div className="row">
                                  {/* Review 1 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Review 2 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Review 3 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Reviews Set 2 */}
                              <div className="swiper-slide">
                                <div className="row">
                                  {/* Review 4 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Review 5 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Review 6 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Reviews Set 3 */}
                              <div className="swiper-slide">
                                <div className="row">
                                  {/* Review 7 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Review 8 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Review 9 */}
                                  <div className="col-md-4">
                                    <div className="single-client-wrapper">
                                      {/* Client Thumb Icon */}
                                      <div className="client-thumb-icon">
                                        <div className="thumb">
                                          <img
                                            src="assets/images/home/review.png"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      {/* Client Content */}
                                      <div className="client-content">
                                        {/* Review Text */}
                                        <p>
                                          We, the Hooper Taxation Services Pty
                                          Ltd, (Ken and Dionesia Goebel) would
                                          like to thank you “Oz Solar Needs” for
                                          your unbelievable, professional,
                                          honest, friendly and reliable service.
                                          You did an amazing job for our
                                          business and residential. What admire
                                          and amaze us the most is Jimmy’s
                                          unconditional helping hand and
                                          friendly advices.
                                        </p>
                                        {/* Review Author */}
                                        <h6 className="name">
                                          <Link href="#">
                                            Ken and Dionesia Goebel | Laidley
                                            Heights
                                          </Link>
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Swiper Pagination */}
                              <div className="swiper-pagination d-none" />

                              {/* Swiper Navigation */}
                              <div className="client-crousel-prev swiper-button-prev">
                                <i className="ion-ios-arrow-thin-left" />
                              </div>
                              <div className="client-crousel-next swiper-button-next">
                                <i className="ion-ios-arrow-thin-right" />
                              </div>
                              {/* Swiper Navigation End */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Slide>
            <Link href="#"></Link>
            <Slide>
              <section className="section" id="page6">
                <div className="section powered-logo-bg">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 position-relative">
                        <div className="section-title client-title">
                          <h2 className="title text-white">
                            We are Powered By
                          </h2>
                          <p className="text-white mt-2">
                            We source together the most advanced technology and
                            products from leading brands
                          </p>
                        </div>
                        <div className="brand-logo-carousel">
                          <div className="swiper-container">
                            <div className="swiper-wrapper align-items-center">
                              {/* Slide 1 */}
                              <div className="swiper-slide">
                                <div className="row">
                                  {/* Brand Logo 1 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/1.jpg"
                                        alt="Brand Logo 1"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 2 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/2.jpg"
                                        alt="Brand Logo 2"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 3 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/3.jpg"
                                        alt="Brand Logo 3"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 4 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/4.jpg"
                                        alt="Brand Logo 4"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 5 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/5.jpg"
                                        alt="Brand Logo 5"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              {/* Slide 2 */}
                              <div className="swiper-slide">
                                <div className="row">
                                  {/* Brand Logo 6 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/1.jpg"
                                        alt="Brand Logo 6"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 7 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/2.jpg"
                                        alt="Brand Logo 7"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 8 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/3.jpg"
                                        alt="Brand Logo 8"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 9 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/4.jpg"
                                        alt="Brand Logo 9"
                                      />
                                    </Link>
                                  </div>
                                  {/* Brand Logo 10 */}
                                  <div className="col">
                                    <Link href="#">
                                      <img
                                        src="assets/images/brand-logo/5.jpg"
                                        alt="Brand Logo 10"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              {/* Add more slides as needed */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Slide>
            <Slide>
              <section className="section" id="page7">
                {/*  Let’s Talk Section Start */}
                <div className="section talk-section">
                  <div className="container-full">
                    <div className="row">
                      <div className="col-lg-5">
                        <img
                          className="w-100"
                          src="assets/images/home/contact-us.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-7 align-items-center d-flex">
                        <div className="lets-talk-w">
                          {/* Section Title Start */}
                          <div className="section-title">
                            <h6 className="mb-2">Easy process for</h6>
                            <h2 className="title">Let’s Talk</h2>
                          </div>
                          {/* Section Title End */}
                          <div className="contact-form">
                            {/* Contact Form */}
                            <form method="post" action="" id="contact-form">
                              <div className="row lets-space">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name..."
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject (optional)"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject (optional)"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject (optional)"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject (optional)"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject (optional)"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    className="input-item"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject (optional)"
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-10">
                                  <div className="input-item">
                                    <textarea
                                      className="textarea-item"
                                      name="message"
                                      placeholder="Message"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                                  <button
                                    className="btn btn-primary"
                                    type="submit"
                                    name="submit"
                                    id="submit">
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
                {/*  Let’s Talk Section End */}
              </section>
            </Slide>
            <Slide>
              <section className="section" id="page8">
                {/*  contact Section Start */}
                <div className="section contact-home-section">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-5 mx-auto">
                        <div className="contact-address">
                          <div className="row section-title align-items-center">
                            <div className="col-lg-8 col-8">
                              {/* Section Title Start */}
                              <div className="">
                                <h2 className="title">Contact Us </h2>
                                <h6 className="mb-2">For any queries</h6>
                              </div>
                              {/* Section Title End */}
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
                              <br /> OZ Solar Needs <br />
                              Unit 14/96 Gardens Drive Willawong Qld 411
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
                              <br />{" "}
                              <Link
                                target="_blank"
                                href="mailto:sales@ozsolarneeds.com.au">
                                sales@ozsolarneeds.com.au
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  contact Section End */}
              </section>
            </Slide>
            <Slide>
              <section className="section" id="page9" style={{ height: 1 }}>
                <Footer />
              </section>
            </Slide>
          </FullPage>
        </div>
      </div>
    </>
  );
};

export default Home;
