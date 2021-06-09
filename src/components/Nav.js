import React, { useState, useLayoutEffect } from "react";
import NavCard from "../cards/NavCard";
import '../styles/nav.css'
import Scrollindicator from "./Scrollindicator";


const Nav = (props) => {

    const { myHome, aboutMe, myServices, mySkills, myDemos, myContact, scrollToRef } = props

    const [isopen, setIsopen] = useState(false);
    const [nameAttribute, setNameAttribute] = useState("");

    const handleClick = () => {
        setIsopen(!isopen)
    }

    const closeNavBar = () => {
        setIsopen(false)
    }

    const getStyle = () => {
        if (nameAttribute === 'skill-wrapper') {
            return {
                backgroundColor: "#e6e6fa",
            };
        } if (nameAttribute === 'demo-wrapper') {
            return {
                backgroundColor: "#e6e6fa",
            };
        }
    };

    const getColorStyle = () => {
        if (nameAttribute === 'skill-wrapper') {
            return {
                color: '#1A237E'
            };
        } if (nameAttribute === 'demo-wrapper') {
            return {
                color: '#1A237E'
            };
        }
    };

    useLayoutEffect(() => {

        const activeScroll = () => {
            const refsArr = [myHome, aboutMe, myServices, mySkills, myDemos, myContact]

            refsArr.forEach(refs => {
                if (refs) {
                    let scrollY = window.pageYOffset;
                    const sectionHeight = refs.current.offsetHeight;
                    const sectionTop = refs.current.offsetTop - 50;
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        setNameAttribute(refs.current.attributes[0].nodeValue)
                    }

                }
            })
        }

        window.addEventListener("scroll", activeScroll);
        return () => {
            window.removeEventListener("scroll", activeScroll);
        };

    }, [aboutMe, myContact, myDemos, myHome, myServices, mySkills])


    return (

        <div className="wrapper-nav" style={getStyle()}>
            <nav ref={myHome}>
                <div className="logo-burger">
                    <div className="hamburger" onClick={handleClick}>
                        {isopen === false ?
                            <span className="bars"><i className="fas fa-bars"></i></span>
                            :
                            <span className={isopen !== false ? "burger-close" : "undefined"} >
                                <i className="far fa-times-circle"></i>
                            </span>
                        }
                    </div>

                    <div className="logo" onClick={() => scrollToRef(myHome)}>StBugyei <i className="far fa-smile"></i>
                    </div>
                </div>

                <NavCard
                    myHome={myHome}
                    aboutMe={aboutMe}
                    mySkills={mySkills}
                    myServices={myServices}
                    myDemos={myDemos}
                    myContact={myContact}
                    scrollToRef={scrollToRef}
                    getColorStyle={getColorStyle}
                    isopen={isopen}
                    nameAttribute={nameAttribute}
                    closeNavBar={closeNavBar}
                />
            </nav>

            <Scrollindicator />
        </div>
    )
}

export default Nav