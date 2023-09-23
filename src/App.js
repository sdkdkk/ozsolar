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
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1700);
    return () => {
      clearTimeout(delay);
    };
  }, [localStorage.getItem("activeLink")]);

  useEffect(() => {
    cmsdata();
    getbanars();
  }, []);
  const getbanars = async () => {
    let reqOptions = {
      url: `${process.env.REACT_APP_API_BASE_URL}api/admin/banner`,
      method: "GET",
    };
    let response = await axios.request(reqOptions);
    const e = response.data.document?.filter((e) => {
      return e.isActive === true;
    });
    console.log("e123", e.product_id);
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
  return isLoading ? (
    <>
      <svg id="loading">
        <g>
          <path
            class="ld-l"
            fill="#39C0C4"
            d="M43.6,33.2h9.2V35H41.6V15.2h2V33.2z"
          />
          <path
            class="ld-o"
            fill="#39C0C4"
            d="M74.7,25.1c0,1.5-0.3,2.9-0.8,4.2c-0.5,1.3-1.2,2.4-2.2,3.3c-0.9,0.9-2,1.6-3.3,2.2
		c-1.3,0.5-2.6,0.8-4.1,0.8s-2.8-0.3-4.1-0.8c-1.3-0.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3C54.3,28,54,26.6,54,25.1s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3s2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8s2.8,0.3,4.1,0.8c1.3,0.5,2.4,1.2,3.3,2.2c0.9,0.9,1.6,2,2.2,3.3
		C74.4,22.2,74.7,23.6,74.7,25.1z M72.5,25.1c0-1.2-0.2-2.3-0.6-3.3c-0.4-1-0.9-2-1.6-2.8c-0.7-0.8-1.6-1.4-2.6-1.9
		c-1-0.5-2.2-0.7-3.4-0.7c-1.3,0-2.4,0.2-3.4,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3
		c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9c1,0.5,2.2,0.7,3.4,0.7c1.3,0,2.4-0.2,3.4-0.7
		c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.7,1.6-2.7C72.4,27.4,72.5,26.3,72.5,25.1z"
          />
          <path
            class="ld-a"
            fill="#39C0C4"
            d="M78.2,35H76l8.6-19.8h2L95.1,35h-2.2l-2.2-5.2H80.4L78.2,35z M81.1,27.9h8.7l-4.4-10.5L81.1,27.9z"
          />
          <path
            class="ld-d"
            fill="#39C0C4"
            d="M98,15.2h6.6c1.2,0,2.5,0.2,3.7,0.6c1.2,0.4,2.4,1,3.4,1.9c1,0.8,1.8,1.9,2.4,3.1s0.9,2.7,0.9,4.3
		c0,1.7-0.3,3.1-0.9,4.3s-1.4,2.3-2.4,3.1c-1,0.8-2.1,1.5-3.4,1.9c-1.2,0.4-2.5,0.6-3.7,0.6H98V15.2z M100,33.2h4
		c1.5,0,2.8-0.2,3.9-0.7c1.1-0.5,2-1.1,2.8-1.8c0.7-0.8,1.3-1.6,1.6-2.6s0.5-2,0.5-3c0-1-0.2-2-0.5-3c-0.4-1-0.9-1.8-1.6-2.6
		c-0.7-0.8-1.6-1.4-2.8-1.8c-1.1-0.5-2.4-0.7-3.9-0.7h-4V33.2z"
          />
          <path class="ld-i" fill="#39C0C4" d="M121.2,35h-2V15.2h2V35z" />
          <path
            class="ld-n"
            fill="#39C0C4"
            d="M140.5,32.1L140.5,32.1l0.1-16.9h2V35h-2.5l-11.5-17.1h-0.1V35h-2V15.2h2.5L140.5,32.1z"
          />
          <path
            class="ld-g"
            fill="#39C0C4"
            d="M162.9,18.8c-0.7-0.7-1.5-1.3-2.5-1.7c-1-0.4-2-0.6-3.3-0.6c-1.3,0-2.4,0.2-3.4,0.7s-1.9,1.1-2.6,1.9
		c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9
		s2.2,0.7,3.4,0.7c1.1,0,2.1-0.1,3.1-0.4c0.9-0.2,1.7-0.5,2.3-0.9v-6h-4.6v-1.8h6.6v9c-1.1,0.7-2.2,1.1-3.5,1.5
		c-1.3,0.3-2.5,0.5-3.9,0.5c-1.5,0-2.9-0.3-4.1-0.8s-2.4-1.2-3.3-2.2c-0.9-0.9-1.6-2-2.1-3.3s-0.8-2.7-0.8-4.2s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3c0.9-0.9,2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8c1.6,0,3,0.2,4.1,0.7s2.2,1.1,3,2L162.9,18.8z"
          />
        </g>
      </svg>

      <svg
        width="182px"
        height="182px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        class="uil-ripple"
      >
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          fill="none"
          class="bk"
        ></rect>
        <g>
          {" "}
          <animate
            attributeName="opacity"
            dur="4s"
            repeatCount="indefinite"
            begin="0s"
            keyTimes="0;0.33;1"
            values="1;1;0"
          ></animate>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#eeeeee"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
          >
            <animate
              attributeName="r"
              dur="4s"
              repeatCount="indefinite"
              begin="0s"
              keyTimes="0;0.33;1"
              values="0;22;44"
            ></animate>
          </circle>
        </g>
        <g>
          <animate
            attributeName="opacity"
            dur="4s"
            repeatCount="indefinite"
            begin="2s"
            keyTimes="0;0.33;1"
            values="1;1;0"
          ></animate>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#eeeeee"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
          >
            <animate
              attributeName="r"
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
              keyTimes="0;0.33;1"
              values="0;22;44"
            ></animate>
          </circle>
        </g>
      </svg>
    </>
  ) : (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <>
              <svg id="loading">
                <g>
                  <path
                    class="ld-l"
                    fill="#39C0C4"
                    d="M43.6,33.2h9.2V35H41.6V15.2h2V33.2z"
                  />
                  <path
                    class="ld-o"
                    fill="#39C0C4"
                    d="M74.7,25.1c0,1.5-0.3,2.9-0.8,4.2c-0.5,1.3-1.2,2.4-2.2,3.3c-0.9,0.9-2,1.6-3.3,2.2
		c-1.3,0.5-2.6,0.8-4.1,0.8s-2.8-0.3-4.1-0.8c-1.3-0.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3C54.3,28,54,26.6,54,25.1s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3s2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8s2.8,0.3,4.1,0.8c1.3,0.5,2.4,1.2,3.3,2.2c0.9,0.9,1.6,2,2.2,3.3
		C74.4,22.2,74.7,23.6,74.7,25.1z M72.5,25.1c0-1.2-0.2-2.3-0.6-3.3c-0.4-1-0.9-2-1.6-2.8c-0.7-0.8-1.6-1.4-2.6-1.9
		c-1-0.5-2.2-0.7-3.4-0.7c-1.3,0-2.4,0.2-3.4,0.7c-1,0.5-1.9,1.1-2.6,1.9c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3
		c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9c1,0.5,2.2,0.7,3.4,0.7c1.3,0,2.4-0.2,3.4-0.7
		c1-0.5,1.9-1.1,2.6-1.9c0.7-0.8,1.3-1.7,1.6-2.7C72.4,27.4,72.5,26.3,72.5,25.1z"
                  />
                  <path
                    class="ld-a"
                    fill="#39C0C4"
                    d="M78.2,35H76l8.6-19.8h2L95.1,35h-2.2l-2.2-5.2H80.4L78.2,35z M81.1,27.9h8.7l-4.4-10.5L81.1,27.9z"
                  />
                  <path
                    class="ld-d"
                    fill="#39C0C4"
                    d="M98,15.2h6.6c1.2,0,2.5,0.2,3.7,0.6c1.2,0.4,2.4,1,3.4,1.9c1,0.8,1.8,1.9,2.4,3.1s0.9,2.7,0.9,4.3
		c0,1.7-0.3,3.1-0.9,4.3s-1.4,2.3-2.4,3.1c-1,0.8-2.1,1.5-3.4,1.9c-1.2,0.4-2.5,0.6-3.7,0.6H98V15.2z M100,33.2h4
		c1.5,0,2.8-0.2,3.9-0.7c1.1-0.5,2-1.1,2.8-1.8c0.7-0.8,1.3-1.6,1.6-2.6s0.5-2,0.5-3c0-1-0.2-2-0.5-3c-0.4-1-0.9-1.8-1.6-2.6
		c-0.7-0.8-1.6-1.4-2.8-1.8c-1.1-0.5-2.4-0.7-3.9-0.7h-4V33.2z"
                  />
                  <path
                    class="ld-i"
                    fill="#39C0C4"
                    d="M121.2,35h-2V15.2h2V35z"
                  />
                  <path
                    class="ld-n"
                    fill="#39C0C4"
                    d="M140.5,32.1L140.5,32.1l0.1-16.9h2V35h-2.5l-11.5-17.1h-0.1V35h-2V15.2h2.5L140.5,32.1z"
                  />
                  <path
                    class="ld-g"
                    fill="#39C0C4"
                    d="M162.9,18.8c-0.7-0.7-1.5-1.3-2.5-1.7c-1-0.4-2-0.6-3.3-0.6c-1.3,0-2.4,0.2-3.4,0.7s-1.9,1.1-2.6,1.9
		c-0.7,0.8-1.3,1.7-1.6,2.8c-0.4,1-0.6,2.1-0.6,3.3c0,1.2,0.2,2.3,0.6,3.3c0.4,1,0.9,2,1.6,2.7c0.7,0.8,1.6,1.4,2.6,1.9
		s2.2,0.7,3.4,0.7c1.1,0,2.1-0.1,3.1-0.4c0.9-0.2,1.7-0.5,2.3-0.9v-6h-4.6v-1.8h6.6v9c-1.1,0.7-2.2,1.1-3.5,1.5
		c-1.3,0.3-2.5,0.5-3.9,0.5c-1.5,0-2.9-0.3-4.1-0.8s-2.4-1.2-3.3-2.2c-0.9-0.9-1.6-2-2.1-3.3s-0.8-2.7-0.8-4.2s0.3-2.9,0.8-4.2
		c0.5-1.3,1.2-2.4,2.2-3.3c0.9-0.9,2-1.6,3.3-2.2c1.3-0.5,2.6-0.8,4.1-0.8c1.6,0,3,0.2,4.1,0.7s2.2,1.1,3,2L162.9,18.8z"
                  />
                </g>
              </svg>

              <svg
                width="182px"
                height="182px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                class="uil-ripple"
              >
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="none"
                  class="bk"
                ></rect>
                <g>
                  {" "}
                  <animate
                    attributeName="opacity"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="0s"
                    keyTimes="0;0.33;1"
                    values="1;1;0"
                  ></animate>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#eeeeee"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <animate
                      attributeName="r"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="0s"
                      keyTimes="0;0.33;1"
                      values="0;22;44"
                    ></animate>
                  </circle>
                </g>
                <g>
                  <animate
                    attributeName="opacity"
                    dur="4s"
                    repeatCount="indefinite"
                    begin="2s"
                    keyTimes="0;0.33;1"
                    values="1;1;0"
                  ></animate>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#eeeeee"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                  >
                    <animate
                      attributeName="r"
                      dur="4s"
                      repeatCount="indefinite"
                      begin="2s"
                      keyTimes="0;0.33;1"
                      values="0;22;44"
                    ></animate>
                  </circle>
                </g>
              </svg>
            </>
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
                      {e.product_id ? (
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
