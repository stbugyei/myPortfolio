import React, { useState, useLayoutEffect } from "react";
import myPic from '../images/mypix.jpg'
import "../styles/header.css"


const Header = (props) => {

    const { myHeader, myContact, scrollToRef } = props

    const [animate, setAnimate] = useState(false);

    useLayoutEffect(() => {

        const animateOnScroll = () => {
            if (myHeader) {
                const scrollY = window.pageYOffset;
                const sectionHeight = myHeader.current.offsetHeight;
                const sectionTop = myHeader.current.offsetTop - 100;
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

    }, [animate, myHeader])


    return (
        <div ref={myHeader} className="header-wrapper">

            <ul className="header-content">
                <li className="header-text">

                    <strong className="hello-text" style={{ animation: animate ? 'stretchText .7s' : 'undefined' }}><span>He</span><br></br><span>llo,</span>   <span className="hello-text1">I am</span></strong>

                    <h1 style={{ animation: animate ? 'fade1 .6s' : 'undefined' }}>Emmanuel Bugyei</h1>

                    <p><span style={{ animation: animate ? 'stretchText 1s' : 'undefined' }}>And I'm</span> <span className="jobtitle" >Front-End Web developer</span></p>

                    <div className="quote">
                        <p>
                            “You never change things by fighting the existing reality.
                            To change something, build a new model that makes the existing model obsolete.”
                        </p>
                        <p>
                            ― Buckminster Fuller
                        </p>
                    </div>

                    <button className="btn-hireme" style={{ animation: animate ? 'slideup .6s' : 'undefined' }} onClick={() => scrollToRef(myContact)}>
                        <span>Need A Project? Let's Chat</span>
                    </button>
                </li>

                <li className="header-image" style={{ animation: animate ? 'slideIn .6s' : 'undefined', backgroundImage: `url(${myPic})` }}></li>
            </ul>
        </div>
    )
}

export default Header
