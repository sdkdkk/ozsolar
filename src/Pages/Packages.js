import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { Package } from "../Redux/getPackagesSlice";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Packages = () => {
  const dispatch = useDispatch();
  const urlLocation = useLocation();
  const [location, setLocation] = useState("");
  const packages = useSelector((state) => state.getPackages.data.data);

  useEffect(() => {
    setLocation(window.location.pathname);
  }, [urlLocation]);

  useEffect(() => {
    dispatch(Package());
  }, [dispatch]);

  // Function to check if the category matches the location path
  const categoryMatchesLocation = (category) => {
    if (location === "/commercial") {
      // For "/Residential/Commercial" path, show both Residential and Commercial packages
      return category === "Commercial";
    } else if (location === "/residential") {
      // For "/Residential" path, show only Residential packages
      return category === "Residential";
    } else {
      // For other paths, show all packages
      return true;
    }
  };

  // Filter data based on the location path
  const filteredPackages =
    packages &&
    packages.filter((item) => categoryMatchesLocation(item.category));

  console.log(filteredPackages);

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
                <h1 className="title">Packages</h1>
                <h5 className="text-white">
                  We would love to advice you on your solar needs.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section packages-section section-padding-bottom section-padding-top">
        <div className="container">
          <div className="row">
            {filteredPackages &&
              filteredPackages.map((data) => (
                <div className="col-lg-6">
                  <div className="packages-content text-center">
                    <div className="packages-box">
                      <h2 className="packages-subtitle">
                        {data.solarPanelCapacity}
                      </h2>
                    </div>
                    <ul className="plan-offer-list">
                      <li>Standard lnstall Tin and tile roof</li>
                      <li>I3.32 kw Solar Pv System</li>
                      <li>{data.eachSolarPanelCapacity}</li>
                      <li>{data.inverter}</li>
                      <li>{data.efficenctWarranty}</li>
                      <li>{data.installationWarranty}</li>
                      <li>
                        Full Site Survey Accredited CEC lnstallation including
                      </li>
                      <li>papeork submitting quality support</li>
                      <li>*Terms and condition apply*</li>
                    </ul>
                    <button className="btn-packages">lnquire Now</button>
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
      <ScrollToTop />
    </>
  );
};

export default Packages;
