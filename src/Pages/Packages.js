import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const Packages = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [activedata, setactivedata] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allPackage, setAllPackage] = useState([]);
  const [data, setdata] = useState({ isActive: true });
  useEffect(() => {
    // new DataTable("#myTable");
    AllPackage();
  }, []);
  const AllPackage = async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let reqOptions = {
      url: `${process.env.REACT_APP_API_BASE_URL}api/admin/packageall`,
      method: "GET",
      headers: headersList,
    };

    let response = await axios.request(reqOptions);
    setAllPackage(response.data.document);
  };
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.MobileNo) {
      errors.MobileNo = "Required";
    } else if (!Number(values.MobileNo)) {
      errors.MobileNo = "Invalid MobileNumber ";
    }

    if (!values.Message) {
      errors.Message = "Required";
    }
    if (!values.PostalCode) {
      errors.PostalCode = "Required";
    }
    if (!values.Address) {
      errors.Address = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      MobileNo: "",
      PostalCode: "",
      Address: "",
      SystemSize: activedata?.kwText,
      Message: "Inquiry for Standard Install - Tin and tile roof package.",
    },
    validate,
    onSubmit: async (values) => {
      try {
        let bodyContent = {
          name: values.name,
          email: values.email,
          mobile_no: values.MobileNo,
          postalCode: values.PostalCode,
          SystemSize: activedata?.kwText,
          address: values.Address,
          message: "Inquiry for Standard Install - Tin and tile roof package.",
        };

        let reqOptions = {
          url: `${process.env.REACT_APP_API_BASE_URL}api/packagescontroller`,
          method: "POST",
          data: bodyContent,
        };

        let response = await axios.request(reqOptions);
        console.log("response", response);
        if (response.data.status === 1) {
          toast.success(response.data.message);
          setShow(!show);
          formik.resetForm();
        }
      } catch (error) {
        toast.success(error);
      }
    },
  });
  allPackage.sort((a, b) => {
    return a.sortOrder - b.sortOrder;
  });
  return (
    <>
      <div className="section packages-section py-5 my-5">
        <div className="container">
          <div className="row">
            {allPackage &&
              allPackage.map((data) => {
                if (
                  data.package?.slice(0, -1)?.toLowerCase() ===
                  location.search.slice(1, -1)?.toLowerCase()
                ) {
                  return (
                    <div className="col-lg-4">
                      <div className="packages-content text-center">
                        <div className="packages-box">
                          <h2 className="packages-subtitle">{data.kwText}</h2>
                          <h6 className="packages-subtitle">{data.title}</h6>
                        </div>
                        <div
                          className="panel-pd"
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                        />
                        <button
                          className="btn-packages"
                          onClick={() => {
                            handleShow();
                            setactivedata(data);
                          }}
                        >
                          lnquire Now
                        </button>
                      </div>
                    </div>
                  );
                } else {
                  return <h3 className="text-center">Not Found</h3>;
                }
              })}
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contact-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="row lets-space">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group my-2">
                  <input
                    className="input-item"
                    type="text"
                    name="name"
                    placeholder="Enter your name..."
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />{" "}
                  {formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group my-2">
                  <input
                    className="input-item"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />{" "}
                  {formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 form-group my-2">
                  <input
                    className="input-item"
                    type="text"
                    name="MobileNo"
                    placeholder="Mobile No"
                    onChange={formik.handleChange}
                    value={formik.values.MobileNo}
                  />
                  {formik.errors.MobileNo ? (
                    <div className="text-danger">{formik.errors.MobileNo}</div>
                  ) : null}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group my-2">
                  <input
                    className="input-item"
                    type="text"
                    name="PostalCode"
                    placeholder="Postal Code"
                    onChange={formik.handleChange}
                    value={formik.values.PostalCode}
                  />
                  {formik.errors.PostalCode ? (
                    <div className="text-danger">
                      {formik.errors.PostalCode}
                    </div>
                  ) : null}
                </div>{" "}
                <div className="col-lg-12 col-md-6 col-sm-12 form-group my-2">
                  <input
                    className="input-item"
                    type="text"
                    name="SystemSize"
                    placeholder="System Size"
                    onChange={formik.handleChange}
                    value={activedata?.kwText}
                  />
                  {formik.errors.SystemSize ? (
                    <div className="text-danger">
                      {formik.errors.SystemSize}
                    </div>
                  ) : null}
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group my-2">
                  <input
                    className="input-item"
                    type="text"
                    name="Address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    value={formik.values.Address}
                  />
                  {formik.errors.Address ? (
                    <div className="text-danger">{formik.errors.Address}</div>
                  ) : null}
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-2">
                  <div className="input-item">
                    <textarea
                      className="textarea-item"
                      name="Message"
                      placeholder="Message"
                      onChange={formik.handleChange}
                      value={
                        "Inquiry for Standard Install - Tin and tile roof package."
                      }
                    />
                    {formik.errors.Message ? (
                      <div className="text-danger">{formik.errors.Message}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group m-0 p-0">
                  {/* <button
                    className="btn btn-primary"
                    type="submit"
                    name="submit"
                    id="submit"
                  >
                    <span className="txt">Send Message</span>
                  </button> */}
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button type="submit" name="submit" variant="primary">
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </div>
                <p className="col-8 form-message mb-0" />
              </div>
            </form>
            <p className="text-center form-messege" />
          </div>
        </Modal.Body>
      </Modal>
      <ScrollToTop />
    </>
  );
};

export default Packages;
