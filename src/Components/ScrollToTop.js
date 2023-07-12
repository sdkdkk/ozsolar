import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

    const scrollRef = useRef(0);
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setShowButton(false);
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
