import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";

const Contact = () => {
    return (
        <>
            {/* Project Banner Section Start */}
            <div
                className="section about-banner-image"
                style={{ backgroundImage: "url(assets/images/contact/large-contact.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <div>
                                <h1 className="title">Contact</h1>
                                <h5 className="text-white">
                                    We would love to advice you on your solar needs.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Banner Section End */}





            {/*  Let’s Talk Section Start */}
            <div className="section talk-section">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block">
                            <img className="w-100" src="assets/images/home/contact-us.jpg" alt="" />
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
            {/*  Let’s Talk Section End */}




            {/* Contact Map Start */}
            <div className="section contact-map-w">
                <div className="container-fluid contact-map-w-top">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
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
                                        <img className="fleg" src="./assets/images/home/fleg.png" alt="" />
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
                                        <br /> sales@ozsolarneeds.com.au
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Google Map Area Start*/}
                <div className="google-map-area w-100">
                    <iframe
                        className="contact-map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14142.210797163165!2d153.0292631!3d-27.6073941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91455f75a6849d%3A0xf61968b7b3f6a50a!2sOz%20Solar%20Needs%20Pty%20Ltd!5e0!3m2!1sen!2sin!4v1688188992064!5m2!1sen!2sin"
                        width="100%"
                        height={700}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                {/*Google Map Area Start*/}
            </div>
            {/* Contact Map End */}



            {/* Main Footer */}
            <Footer />
            {/* End Main Footer */}


            {/* Scroll Top Start */}
            <ScrollToTop />
            {/* Scroll Top End */}
        </>
    );
};

export default Contact;
