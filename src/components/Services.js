import React, { useState, useLayoutEffect } from "react";

import "../styles/services.css"


const Services = (props) => {

    const { myServices } = props

    const [animate, setAnimate] = useState(false);

    const getStyle = (value) => {
        if (animate) {
            return {
                opacity: '1',
                transitionDelay: value,
                transform: 'translateX(0)'
            };
        }
    };

    useLayoutEffect(() => {

        const animateOnScroll = () => {
            if (myServices) {
                const scrollY = window.pageYOffset;
                const sectionHeight = myServices.current.offsetHeight;
                const sectionTop = myServices.current.offsetTop - 50;
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setAnimate(true)
                } else {
                    setAnimate(false)
                }
            }
        }

        window.addEventListener("scroll", animateOnScroll);

        return () => {
            window.removeEventListener("scroll", animateOnScroll);
        };
    }, [animate, myServices])

    return (

        <div ref={myServices} className="service-wrapper"  style={{ animation: animate ? 'fade1 1s' : 'undefined' }}>

            <ul className="service-link__container">
                <h1>OFFERING TO YOU</h1>
                <li>
                    <p> “To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.”
                    </p>
                    <p>― Don Alden Adams</p>
                </li>
            </ul>

            <ul className="service-content">
                <li className="webdesign"  style={getStyle('0.0s')}>
                    <span style={{ color: 'red', fontSize: '50px', paddingTop: '10px' }}><i className="fas fa-paint-brush"></i></span>
                    <h2>Web Design</h2>
                    <ul>
                        <li>Clean</li>
                        <li>Artistic</li>
                        <li>Responsive</li>
                        <li>Performance and Speed</li>
                        <li>Modern</li>
                        <li>Secure</li>
                    </ul>
                </li>

                <li className="webadvertising" style={getStyle('0.2s')}>
                    <span style={{ color: 'red', fontSize: '50px', paddingTop: '10px' }}><i className="far fa-chart-bar"></i></span>
                    <h2>Web Advertising</h2>
                    <ul>
                        <li>Creative</li>
                        <li>Simplicity</li>
                        <li>Persuasive</li>
                        <li>Emotional connection with users</li>
                        <li>Tell a story</li>
                        <li>Original</li>
                    </ul>
                </li>

                <li className="webapplication" style={getStyle('0.4s')}>
                    <span style={{ color: 'red', fontSize: '50px', paddingTop: '10px' }}><i className="fas fa-laptop-code"></i></span>
                    <h2>Web Application</h2>
                    <ul>
                        <li>Security</li>
                        <li>Cross platform</li>
                        <li>Performance and Reliability</li>
                        <li>Transparency and Troubleshooting</li>
                        <li>Cloud-hosted and scalable</li>
                        <li>Usability</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Services
