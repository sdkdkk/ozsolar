import React from "react";
import ScrollToTop from "../Components/ScrollToTop";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
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
    },
    validate,
    onSubmit: async (values) => {
      try {
        let bodyContent = {
          name: values.name,
          email: values.email,
          mobile_no: values.MobileNo,
          postalCode: values.PostalCode,
          address: values.Address,
          message: values.Message,
        };

        let reqOptions = {
          url: "http://localhost:5000/api/contactinquary",
          method: "POST",
          data: bodyContent,
        };

        let response = await axios.request(reqOptions);
        console.log("response", response.data);
        if (response.data.status === 1) {
          toast.success(response.data.message);
          formik.resetForm();
        }
      } catch (error) {
        toast.success(error);
      }
    },
  });
  return (
    <>
      {/* Project Banner Section Start */}
      {/* Project Banner Section End */}

      <div
        className="section about-banner-image"
        style={{
          backgroundImage: "url(assets/images/contact/large-contact.jpg)",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="content">
              <div>
                <h1 className="title">Contact</h1>
                <h5 className="text-white">
                  We would love to advice you on your solar needs.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Let’s Talk Section Start */}
      <div className="section talk-section">
        <div className="container-full">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block">
              <img
                className="w-100"
                src="assets/images/home/contact-us.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7 align-items-center d-flex">
              <div className="lets-talk-w">
                <div className="section-title">
                  <h6 className="mb-2">Easy process for</h6>
                  <h2 className="title">Let’s Talk</h2>
                </div>
                <div className="contact-form">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row lets-space">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          className="input-item"
                          type="text"
                          name="name"
                          placeholder="Enter your name..."
                          onChange={formik.handleChange}
                          value={formik.values.name}
                        />{" "}
                        {formik.errors.name ? (
                          <div className="text-danger">
                            {formik.errors.name}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          className="input-item"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />{" "}
                        {formik.errors.email ? (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input
                          className="input-item"
                          type="text"
                          name="MobileNo"
                          placeholder="Mobile No"
                          onChange={formik.handleChange}
                          value={formik.values.MobileNo}
                        />
                        {formik.errors.MobileNo ? (
                          <div className="text-danger">
                            {formik.errors.MobileNo}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
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
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          className="input-item"
                          type="text"
                          name="Address"
                          placeholder="Address"
                          onChange={formik.handleChange}
                          value={formik.values.Address}
                        />
                        {formik.errors.Address ? (
                          <div className="text-danger">
                            {formik.errors.Address}
                          </div>
                        ) : null}
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-10">
                        <div className="input-item">
                          <textarea
                            className="textarea-item"
                            name="Message"
                            placeholder="Message"
                            onChange={formik.handleChange}
                            value={formik.values.Message}
                          />
                          {formik.errors.Message ? (
                            <div className="text-danger">
                              {formik.errors.Message}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          name="submit"
                          id="submit"
                        >
                          <span className="txt">Send Message</span>
                        </button>
                      </div>
                      <p className="col-8 form-message mb-0" />
                    </div>
                  </form>
                  <p className="text-center form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Let’s Talk Section End */}

      {/* Contact Map Start */}
      <div className="section contact-map-w">
        <div className="container-fluid contact-map-w-top">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="contact-address">
                <div className="row section-title align-items-center">
                  <div className="col-lg-8 col-8">
                    {/* Section Title Start */}
                    <div className="">
                      <h2 className="title">Contact Us </h2>
                      <h6 className="mb-2">For any queries</h6>
                    </div>
                    {/* Section Title End */}
                  </div>
                  <div className="col-lg-4 col-4 text-end">
                    <img
                      className="fleg"
                      src="./assets/images/home/fleg.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="contact-inner-box">
                  <i className="icofont-location-pin" />
                  <p>
                    <strong>Address</strong>
                    <br /> OZ Solar Needs <br />
                    Unit 14/96 Gardens Drive Willawong Qld 411
                  </p>
                </div>
                <div className="contact-inner-box">
                  <i className="icofont-phone" />
                  <p>
                    <strong>Phone</strong>
                    <br /> 1300-058-561
                  </p>
                </div>
                <div className="contact-inner-box">
                  <i className="icofont-email" />
                  <p>
                    <strong>Email</strong>
                    <br /> sales@ozsolarneeds.com.au
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Google Map Area Start*/}
        <div className="google-map-area w-100">
          <iframe
            className="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14142.210797163165!2d153.0292631!3d-27.6073941!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91455f75a6849d%3A0xf61968b7b3f6a50a!2sOz%20Solar%20Needs%20Pty%20Ltd!5e0!3m2!1sen!2sin!4v1688188992064!5m2!1sen!2sin"
            width="100%"
            height={700}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/*Google Map Area Start*/}
      </div>
      {/* Contact Map End */}

      {/* Main Footer */}
      {/* End Main Footer */}

      {/* Scroll Top Start */}
      <ScrollToTop />
      {/* Scroll Top End */}
    </>
  );
};

export default Contact;
