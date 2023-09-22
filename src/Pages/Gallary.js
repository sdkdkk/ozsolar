import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import "magnific-popup/dist/magnific-popup.css";
import $ from "jquery";
import "magnific-popup/dist/jquery.magnific-popup";
import "magnific-popup";
import ScrollToTop from "../Components/ScrollToTop";
import { useState } from "react";
import axios from "axios";

const GalleryComponent = ({ gallerytype }) => {
  console.log("gallerytype", gallerytype.title);
  const [Gallery, setGallery] = useState([]);
  useEffect(() => {
    $(".image").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
    getdata();
  }, []);

  const getdata = async () => {
    let reqOptions = {
      url: "http://localhost:5000/api/admin/galleryImageall",
      method: "GET",
    };

    let response = await axios.request(reqOptions);
    setGallery(response.data.document);
  };
  Gallery.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
  return (
    <>
      <div className="section pt-5 mt-md-5 project-masonry-section">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1  mesonry-list">
            <div className="resizer col" />
            {Gallery.map((e, i) => {
              if (e.gallery.title === gallerytype.title)
                if (e.isActive === true) {
                  return (
                    <div className="col-12 col-lg-3 mb-5" key={i}>
                      <div className="single-project-wrap">
                        <div className="project-thumb position-relative m-0">
                          <a className="image" data-magnific="image">
                            <img src={e?.gallery_image} alt="project Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
            })}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default GalleryComponent;
