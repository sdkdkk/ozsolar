import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTop = () => {
  const scrollRef = useRef(0);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const prevScrollTop = scrollRef.current || 0;
    if (scrollTop < prevScrollTop && scrollTop > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
    scrollRef.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`right text-end fixed-bottom ${
          showButton ? "active" : "inactive"
        }`}
        style={{ margin: "10px" }}
      >
        <button
          type="button"
          className="btn btn-warning"
          onClick={scrollToTop}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        >
          <IoIosArrowDropupCircle size={30} color="white" />
        </button>
      </div>
    </>
  );
};

export default ScrollToTop;
