import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import "magnific-popup/dist/magnific-popup.css";
import $ from "jquery";
import "magnific-popup/dist/jquery.magnific-popup";
import 'magnific-popup';
import ScrollToTop from "../Components/ScrollToTop";

const GalleryComponent = () => {

    useEffect(() => {
        $(".image").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });
    }, []);

    return (
        <>
            <div
                className="section about-banner-image"
                style={{
                    backgroundImage: "url(assets/images/gallery/large-gallery.jpg)",
                }}>
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <div>
                                <h1 className="title">GALLERY</h1>
                                <h5 className="text-white">Our incredible project showcase.</h5>
                            </div>
                        </div>
                    </div>
                    {/* banner button Content Start */}
                    <div className="row mt-n2">
                        <div className="messonry-button-w">
                            <div className="messonry-button text-left">
                                <button data-filter="*" className="is-checked port-filter">
                                    View All
                                </button>
                                <button data-filter=".cat-1" className="port-filter">
                                    Panels
                                </button>
                                <button data-filter=".cat-2" className="port-filter">
                                    Inverter
                                </button>
                                <button data-filter=".cat-3" className="port-filter">
                                    Other
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* banner button Content End */}
                </div>
            </div>
            {/* Project Banner Section End */}
            {/* Project Section Start Here */}
            <div className="section section-padding-top project-masonry-section">
                <div className="container">
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1  mesonry-list">
                        <div className="resizer col" />
                        {/* Single project Start */}
                        <div className="col cat-2 cat-3 cat-4 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/2.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/2.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-2 cat-3 cat-4 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/3.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/3.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-1 cat-2 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/4.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/4.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-4 cat-3 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/5.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/5.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-2 cat-1 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/6.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/6.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-1 cat-4 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/7.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/7.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-1 cat-3 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/8.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/8.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-2 cat-4 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/9.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/9.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                        {/* Single project Start */}
                        <div className="col cat-1 cat-3 mb-10">
                            <div className="single-project-wrap">
                                <div className="project-thumb position-relative m-0">
                                    <a
                                        className="image"
                                        href="assets/images/gallery/10.jpg"
                                        data-magnific="image"
                                    >
                                        <img src="assets/images/gallery/10.jpg" alt="project Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Single project End */}
                    </div>
                </div>
            </div>
            {/* project Section End Here */}
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
            <Footer />

            {/* Scroll Top Start */}
            <ScrollToTop />
            {/* Scroll Top End */}
        </>
    );
};

export default GalleryComponent;
