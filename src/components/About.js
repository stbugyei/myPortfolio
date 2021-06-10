import React, { useState, useLayoutEffect } from "react";
import "../styles/about.css"

const About = (props) => {

    const { aboutMe } = props

    const [animate, setAnimate] = useState(false);

    useLayoutEffect(() => {
       
        const animateOnScroll = () => {
            if (aboutMe) {
                let scrollY = window.pageYOffset;
                const sectionHeight = aboutMe.current.offsetHeight;
                const sectionTop = aboutMe.current.offsetTop - 50;
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

    }, [animate, aboutMe])


    return (

        <div ref={aboutMe} className="about-wrapper">
            <ul className="about-link__container">
                <h1>ABOUT MYSELF</h1>
                <p style={{ animation: animate ? 'textSlide 1s' : 'undefined' }}> “There’s no need to be perfect to inspire others. Let others get inspired by how you deal with your imperfections.”</p>
            </ul>

            <ul className="about-content">
                <li className="about-image" style={{ animation: animate ? 'fade 1s' : 'undefined'}}>
                </li>

                <li className="about-text">
                    <h2>Profile Card</h2>
                    <p>
                        A successful computer hardware technician specialized in Operating Systems and software Installation, Computer Maintenance, Repairs and Assembling. I Have an unlimited understanding of working environment and work ethics, very tactful and decisive in handling related job issues from start to the end.
                </p>
                    <p style={{ paddingTop: '10px' }}>
                        I am presently into front-end web development and always looking for opportunities to improve my skill set and career progress opportunities.
                    </p>
                </li>
            </ul>

        </div>
    )
}
export default About
