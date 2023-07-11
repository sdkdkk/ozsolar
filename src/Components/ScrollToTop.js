import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [Down, setDown] = useState(false);

    const Move = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        let height = 250;
        const window = document.body.scrollTop || document.documentElement.scrollTop;
        if (window > height) {
            setDown(true);
        }
        else {
            setDown(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    });

    return (
        <>
            {
                Down && <a href="##" className="scroll-top" id="scroll-top" onClick={Move}>
                    <FaArrowUp className="AiOutlineArrowUp" />
                </a>
            }
        </>
    );
};

export default ScrollToTop;
