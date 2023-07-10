import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";

const Finance = () => {
    return (
        <>
            {/* Project Banner Section Start */}
            <div
                className="section about-banner-image"
                style={{ backgroundImage: "url(assets/images/finance-option/banner.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <div>
                                <h1 className="title">Finance Options</h1>
                                <h5 className="text-white">Your everyday spending</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Banner Section End */}




            {/* about Section Start */}
            <div className="section section-padding-top">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="history-wrapper">
                                <img src="assets/images/finance-option/zip-pay-logo.jpg" alt="" />
                                <h1 className="title mb-3">Payments explained</h1>
                                <div className="history-content">
                                    <p className="description">
                                        It’s easy! Every time you make a purchase we simply add it to
                                        your account. Then at the beginning of the month, we send you a
                                        summary (called a “statement”) of what you spent and what you
                                        paid in the month. You can then pay it back in full at the end
                                        of the month or pay over time from as little as a month,
                                        interest free.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <img src="assets/images/finance-option/zip.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <img src="assets/images/finance-option/zip01.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="history-wrapper">
                                <h1 className="title mb-3">Shop it. Own it. Interest free.</h1>
                                <div className="history-content">
                                    <p className="description">
                                        Do more, enjoy more, experience more. Own your freedom, your
                                        wellness, your personal style. Simply checkout with Zip and pay
                                        later. Get that solar panels, that inverter, take that solar
                                        system. It’s your life, we’ll help you own it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about Section End */}




            {/* finance option Section Start  */}
            <div className="section section-padding-top section-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="finance-option-block">
                                <i className="fo-icons">
                                    <img src="assets/images/finance-option/fo-icon01.png" alt="" />
                                </i>
                                <h3>Want it</h3>
                                <h5>Create your account in moments and select</h5>
                                <p>Zip at checkout</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="finance-option-block">
                                <i className="fo-icons">
                                    <img src="assets/images/finance-option/fo-icon02.png" alt="" />
                                </i>
                                <h3>Get it</h3>
                                <h5>We pay the store, you get the goods,</h5>
                                <p>nothing to pay today</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="finance-option-block">
                                <i className="fo-icons">
                                    <img src="assets/images/finance-option/fo-icon03.png" alt="" />
                                </i>
                                <h3>Own it</h3>
                                <h5>Choose how you pay us back over time, up to</h5>
                                <p>12 months interest free</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* finance option Section End  */}




            {/* Main Footer */}
            <Footer />
            {/* End Main Footer */}


            {/* Scroll Top Start */}
            <ScrollToTop />
            {/* Scroll Top End */}
        </>
    );
};

export default Finance;
