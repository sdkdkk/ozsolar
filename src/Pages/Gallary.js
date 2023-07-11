import React, { useState } from 'react';
import Footer from '../Components/Footer';

const GalleryComponent = () => {
    const [filter, setFilter] = useState('*');

    const handleFilterClick = (filterValue) => {
        setFilter(filterValue);
    };

    const galleryItems = [
        { category: 'cat-2 cat-3 cat-4', imagePath: 'assets/images/gallery/2.jpg' },
        { category: 'cat-2 cat-3 cat-4', imagePath: 'assets/images/gallery/3.jpg' },
        { category: 'cat-1 cat-2', imagePath: 'assets/images/gallery/4.jpg' },
        { category: 'cat-4 cat-3', imagePath: 'assets/images/gallery/5.jpg' },
        { category: 'cat-2 cat-1', imagePath: 'assets/images/gallery/6.jpg' },
        { category: 'cat-1 cat-4', imagePath: 'assets/images/gallery/7.jpg' },
        { category: 'cat-1 cat-3', imagePath: 'assets/images/gallery/8.jpg' },
        { category: 'cat-2 cat-4', imagePath: 'assets/images/gallery/9.jpg' },
        { category: 'cat-1 cat-3', imagePath: 'assets/images/gallery/10.jpg' },
    ];

    const filteredGalleryItems = filter === '*' ? galleryItems : galleryItems.filter(item => item.category.includes(filter));

    return (
        <>
            <div className="section about-banner-image" style={{ backgroundImage: "url(assets/images/gallery/large-gallery.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="content">
                            <div>
                                <h1 className="title">GALLERY</h1>
                                <h5 className="text-white">Our incredible project showcase.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-n2">
                        <div className="messonry-button-w">
                            <div className="messonry-button text-left">
                                <button onClick={() => handleFilterClick('*')} className={filter === '*' ? 'is-checked port-filter' : 'port-filter'}>
                                    View All
                                </button>
                                <button onClick={() => handleFilterClick('cat-1')} className={filter === 'cat-1' ? 'is-checked port-filter' : 'port-filter'}>
                                    Panels
                                </button>
                                <button onClick={() => handleFilterClick('cat-2')} className={filter === 'cat-2' ? 'is-checked port-filter' : 'port-filter'}>
                                    Inverter
                                </button>
                                <button onClick={() => handleFilterClick('cat-3')} className={filter === 'cat-3' ? 'is-checked port-filter' : 'port-filter'}>
                                    Other
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-padding-top project-masonry-section">
                <div className="container">
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 mesonry-list">
                        <div className="resizer col" />
                        {filteredGalleryItems.map((item, index) => (
                            <div key={index} className={`col ${item.category} mb-10`}>
                                <div className="single-project-wrap">
                                    <div className="project-thumb position-relative m-0">
                                        <a className="image" href={item.imagePath} data-magnific="image">
                                            <img src={item.imagePath} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
                                            <p className="mb-0">Download datasheets brochures technical documents &amp; certification</p>
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
                                            <p className="mb-0">Download datasheets brochures technical documents &amp; certification</p>
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
                                            <p className="mb-0">Download datasheets brochures technical documents &amp; certification</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GalleryComponent;
