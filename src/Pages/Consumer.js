import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";

const Consumer = () => {
    return (
        <>
            {/* Project Banner Section Start */}
            <div
                className="section about-banner-image"
                style={{ backgroundImage: "url(assets/images/gallery/large-gallery.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <div>
                                <h1 className="title">CEO Consumer</h1>
                                <h5 className="text-white">
                                    We would love to advice you on your solar needs.
                                </h5>
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
                        <div className="col-lg-7 col-md-7">
                            <div className="history-wrapper">
                                <h1 className="title mb-3">
                                    Clean Energy Council Consumer Guide For{" "}
                                    <span className="text-orange">Solar PV Installation.</span>
                                </h1>
                                <div className="history-content">
                                    <p className="description">
                                        The clean energy council is the peak body representing
                                        Australia’s clean energy sector. It is an industry association
                                        made up of more than 580 member companies operation in the
                                        fields of renewable energy.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <img src="assets/images/consumer-guide/solar.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* about Section End */}




            {/* Brochure Downloads Section Start  */}
            <div className="section section-padding-top section-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="section-title client-title text-center">
                            <h2 className="title">Brochure Downloads</h2>
                        </div>
                        <div className="packages-Brochure-content">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="d-flex align-items-center download-box">
                                        <div className="download-icon">
                                            <i className="icofont-download" />
                                        </div>
                                        <div className="packages-section-content">
                                            <h5 className="d-inline mb--0">Download Brochure</h5>
                                            <p className="mb-0">
                                                Download datasheets brochures technical documents &amp;
                                                certification
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex align-items-center download-box">
                                        <div className="download-icon">
                                            <i className="icofont-download" />
                                        </div>
                                        <div className="packages-section-content">
                                            <h5 className="d-inline mb--0">Download Brochure</h5>
                                            <p className="mb-0">
                                                Download datasheets brochures technical documents &amp;
                                                certification
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="d-flex align-items-center download-box">
                                        <div className="download-icon">
                                            <i className="icofont-download" />
                                        </div>
                                        <div className="packages-section-content">
                                            <h5 className="d-inline mb--0">Download Brochure</h5>
                                            <p className="mb-0">
                                                Download datasheets brochures technical documents &amp;
                                                certification
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Brochure Downloads Section End  */}


            {/* Main Footer */}
            <Footer />
            {/* End Main Footer */}


            {/* Scroll Top Start */}
            <ScrollToTop />
            {/* Scroll Top End */}
        </>
    );
};

export default Consumer;
