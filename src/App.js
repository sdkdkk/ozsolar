import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Consumer from "./Pages/Consumer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
const componentMap = {
  About: lazy(() => import("./Pages/About")),
  Panels: lazy(() => import("./Pages/Panels")),
  Inverter: lazy(() => import("./Pages/Panels")),
  Packages: lazy(() => import("./Pages/Packages")),
  Gallery: lazy(() => import("./Pages/Gallary")),
  Finance: lazy(() => import("./Pages/Finance")),
  Contact: lazy(() => import("./Pages/Contact")),
  Consumer: lazy(() => import("./Pages/Consumer")),
  Specials: lazy(() => import("./Pages/Specials")),
};
function App() {
  const [banars, setbanars] = useState([]);
  const [avtivedata, setavtivedata] = useState(0);
  const [avtivemenu, setavtivemenu] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [gallerytype, setgallerytype] = useState([]);
  useEffect(() => {
    setavtivedata(0);
    cmsdata();
    getbanars();
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);
  const getbanars = async () => {
    let reqOptions = {
      url: "http://localhost:5000/api/admin/banner",
      method: "GET",
    };
    let response = await axios.request(reqOptions);
    const e = response.data.document?.filter((e) => {
      return e.isActive === true;
    });
    console.log("e123", e);
    setbanars(e);
  };
  const [data, setdata] = useState([]);
  const cmsdata = async () => {
    try {
      let reqOptions = {
        url: `${process.env.REACT_APP_API_BASE_URL}api/admin/all123`,
        method: "GET",
      };
      const response = await axios.request(reqOptions);
      // Handle the successful response here
      setdata(response.data);
      let reqOptions1 = {
        url: `${process.env.REACT_APP_API_BASE_URL}api/admin/galleryall`,
        method: "GET",
      };
      const response1 = await axios.request(reqOptions1);
      // Handle the successful response here
      setgallerytype(response1.data.document);
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };
  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div class="multi-spinner-container">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner">
                    <div class="multi-spinner">
                      <div class="multi-spinner">
                        <div class="multi-spinner"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <Navbar setavtivedata={setavtivedata} setavtivemenu={setavtivemenu} />
          <ToastContainer />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home banars={banars} data={data.Contact} />}
            />
            <Route
              exact
              path="/Contact"
              element={<Contact banars={banars} />}
            />
            <Route
              exact
              path="/Consumer"
              element={<Consumer banars={banars} />}
            />
            {data?.document?.map((e, i) => {
              const LazyComponent = componentMap[e.name.split(" ")[0]];
              // if (!LazyComponent) {
              //   return null;
              // }
              return (
                <Route
                  key={i}
                  path={`/${e.name}`}
                  element={
                    <>
                      <div
                        className="section about-banner-image"
                        style={{
                          backgroundImage: `url(${
                            e?.banner[0]?.banner_image
                              ? process.env.REACT_APP_API_BASE_URL +
                                e?.banner[0]?.banner_image
                              : process.env.REACT_APP_API_BASE_URL +
                                e?.banner11[avtivedata]?.subCat_product
                          })`,
                          height: "100vh",
                        }}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="content">
                              <div>
                                {e?.banner11[avtivedata]?.logoimg && (
                                  <img
                                    src={
                                      process.env.REACT_APP_API_BASE_URL +
                                      e?.banner11[avtivedata]?.logoimg
                                    }
                                    width={200}
                                    className="img-fluid py-4"
                                  />
                                )}

                                {e?.banner11[avtivedata]?.productName ? (
                                  <h1 className="text-light">
                                    {e?.banner11[avtivedata]?.productName}
                                  </h1>
                                ) : (
                                  <h1 className="title">
                                    {avtivemenu + "  " + e?.name}{" "}
                                  </h1>
                                )}

                                <h6 className="text-white pt-4">
                                  {e?.banner11[avtivedata]?.Description
                                    ? e?.banner11[avtivedata]?.Description
                                    : e?.banner[0]?.description}
                                </h6>
                              </div>
                            </div>
                          </div>
                          {e?.banner11.length > 0 && (
                            <div className="row mt-n2">
                              <div className="messonry-button-w">
                                <div className="messonry-button">
                                  {e?.banner11.map((el, i) => {
                                    return (
                                      <a
                                        key={i}
                                        className={`${
                                          i === avtivedata && "is-checked"
                                        } port-filter`}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                          setavtivedata(i);
                                        }}
                                      >
                                        {el.productName}
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                          {e?.name === "Gallery" && (
                            <div className="row mt-n2">
                              <div className="messonry-button-w">
                                <div className="messonry-button">
                                  {gallerytype.map((el, i) => {
                                    if (el.isActive === true) {
                                      return (
                                        <a
                                          key={i}
                                          className={`${
                                            i === avtivedata && "is-checked"
                                          } port-filter`}
                                          style={{ cursor: "pointer" }}
                                          onClick={() => {
                                            setavtivedata(i);
                                          }}
                                        >
                                          {el.title}
                                        </a>
                                      );
                                    }
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {e.product_id === "000000000000000000000000" &&
                      e.product_id ? (
                        <componentMap.Panels
                          productscontent={e?.productscontent}
                          productfiles={e?.productfiles}
                          avtivedata={e?.banner11[avtivedata]}
                        />
                      ) : (
                        <LazyComponent gallerytype={gallerytype[avtivedata]} />
                      )}
                    </>
                  }
                />
              );
            })}
          </Routes>
          <Footer data={data} />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
