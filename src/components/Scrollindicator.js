import React, { useState, useLayoutEffect } from "react";

const Scrollindicator = () => {

    const [scrollWidth, setSrollWidth] = useState(0);

    const getStyle = () => {
        if (scrollWidth) {
            return {
                width: scrollWidth + '%',
            };
        }
    };


    const displayPercentageSign = () => {
        let percentage = Math.ceil(scrollWidth)
        if (percentage !== 0) {
            return (
                <span>%</span>
            )
        }
    }


    useLayoutEffect(() => {

        const scrollIndicator = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            if (scrolled) {
                setSrollWidth(scrolled)
            }
        }

        window.addEventListener("scroll", scrollIndicator);

        return () => {
            window.removeEventListener("scroll", scrollIndicator);
        };

    }, [])



    return (
        <div className="scroll-indicator__wrapper" style={{ backgroundColor: Math.ceil(scrollWidth) > 16 ? "#fff" : "transparent" }}>
            <div className="scroll-indicator__position" style={getStyle()}>
                <span className="scroll-indicator__span">{Math.ceil(scrollWidth)}{displayPercentageSign()}</span>
            </div>
        </div>
    )
}

export default Scrollindicator
