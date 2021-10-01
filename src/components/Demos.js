import React, { useState, useLayoutEffect } from "react";
import "../styles/demo.css"
import DemosCard from "../cards/DemosCard";

const Demos = (props) => {

    const { myDemos } = props

    const [animate, setAnimate] = useState(false);

    const getStyle = (value) => {
        if (animate) {
            return {
                opacity: '1',
                transitionDelay: value,
                transform: 'translateY(0)'
            };
        }
    };

    useLayoutEffect(() => {

        const animateOnScrollScroll = () => {
            if (myDemos) {
                const scrollY = window.pageYOffset;
                const sectionHeight = myDemos.current.offsetHeight;
                const sectionTop = myDemos.current.offsetTop - 50;
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setAnimate(true)
                } else {
                    setAnimate(false)
                }
            }
        }

        window.addEventListener("scroll", animateOnScrollScroll);

        return () => {
            window.removeEventListener("scroll", animateOnScrollScroll);
        };
    }, [animate, myDemos])


    return (
        <div ref={myDemos} className="demo-wrapper">

            <h1 style={{ animation: animate ? 'textSlide .5s' : 'undefined' }}>CATCH SOME APPs</h1>

            <h2>Get a glimps of some projects</h2>

            <DemosCard getStyle={getStyle} />

            <a href="https://github.com/stbugyei?tab=repositories" target="_blank" rel="noopener noreferrer">
                <h2 className="more-demos"> <span className="demo-arrow">
                    <i className="far fa-hand-point-right"></i></span> Click Here For More Apps </h2>
            </a>

        </div>
    )
}

export default Demos
