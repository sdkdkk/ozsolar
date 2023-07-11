import React, { useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let height = 200;
        if (window.scrollY > height) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);


    return (
        <>
            {
                showButton && <div className="right text-end fixed-bottom" style={{ margin: '10px' }}>
                    <button type="button" className="btn btn-danger rounded-5" onClick={scrollToTop}>
                        <FaArrowUp className="AiOutlineArrowUp" />
                    </button>
                </div>
            }
        </>
    );
};

export default ScrollToTop;
