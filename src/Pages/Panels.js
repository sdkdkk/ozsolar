import React from "react";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

const Panels = ({ productscontent, productfiles, avtivedata }) => {
  // if (e?.products_id === avtivedata._id) {
  const fillterdata = productfiles?.filter((e, i) => {
    return e.products_id === avtivedata._id && e.isActive === true;
  });
  const productscontentdata = productscontent?.filter((e, i) => {
    return e.products_id === avtivedata._id && e.isActive === true;
  });
  
  productscontentdata?.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
  fillterdata?.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
  return (
    <>
      <div className="section">
        <div className="container-full">
          {productscontentdata?.map((e, i) => {
            return (
              <div className="row d-flex align-items-center" key={i}>
                {i % 2 === 0 ? ( // Check if index is even
                  <>
                    <div className="col-lg-5 h-100">
                      <img
                        className=""
                        src={
                          process.env.REACT_APP_API_BASE_URL + e.products_img
                        }
                        alt=""
                      />
                    </div>
                    <div
                      className="col-lg-7 panel-pd"
                      dangerouslySetInnerHTML={{ __html: e?.ContentText }}
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="col-lg-7 panel-pd"
                      dangerouslySetInnerHTML={{ __html: e?.ContentText }}
                    />
                    <div className="col-lg-5 h-100">
                      <img
                        className=""
                        src={
                          process.env.REACT_APP_API_BASE_URL + e.products_img
                        }
                        alt=""
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {fillterdata?.length > 0 && (
        <div className="section section-padding-top section-padding-bottom">
          <div className="container">
            <div className="row">
              <div className="section-title client-title text-center">
                <h2 className="title">Brochure Downloads</h2>
              </div>

              <div className="packages-Brochure-content">
                <div
                  className="row d-flex"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  {fillterdata.map((e, i) => {
                    return (
                      <div className="col-lg-4" key={i}>
                        <div className="d-flex align-items-center download-box">
                          <div
                            className="download-icon"
                            onClick={() => {
                              fetch(
                                process.env.REACT_APP_API_BASE_URL + e.File
                              ).then((response) => {
                                response.blob().then((blob) => {
                                  const fileURL =
                                    window.URL.createObjectURL(blob);
                                  let alink = document.createElement("a");
                                  alink.href = fileURL;
                                  alink.download = e.Title;
                                  alink.click();
                                });
                              });
                            }}
                          >
                            <i className="icofont-download" />
                          </div>
                          <div className="packages-section-content">
                            <h5 className="d-inline mb--0">{e.Title}</h5>
                            <p className="mb-0">{e.ContentText}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ScrollToTop />
    </>
  );
};

export default Panels;
