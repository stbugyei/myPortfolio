import React, { useRef } from 'react'

import About from './About'
import Contact from './Contact'
import Demos from './Demos'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'
import Services from './Services'
import Skills from './Skills'

const Home = () => {

    const myHome = useRef(null);
    const myHeader = useRef(null);
    const aboutMe = useRef(null);
    const myServices = useRef(null);
    const myDemos = useRef(null);
    const mySkills = useRef(null);
    const myContact = useRef(null);
    const myFooter = useRef(null);

    const scrollToRef = (ref) => {
        if (ref) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }


    return (
        <div ref={myHome} className="home-wrapper">

            <Nav
                myHome={myHome}
                myHeader={myHeader}
                aboutMe={aboutMe}
                mySkills={mySkills}
                myServices={myServices}
                myDemos={myDemos}
                myContact={myContact}
                scrollToRef={scrollToRef}
            />

            <Header myHeader={myHeader} myContact={myContact} scrollToRef={scrollToRef} />

            <About aboutMe={aboutMe} />

            <Skills mySkills={mySkills} />

            <Services myServices={myServices} />

            <Demos myDemos={myDemos} />

            <Contact myContact={myContact} />

            <Footer
                myHome={myHome}
                myHeader={myHeader}
                aboutMe={aboutMe}
                mySkills={mySkills}
                myServices={myServices}
                myDemos={myDemos}
                myContact={myContact}
                myFooter={myFooter}
                scrollToRef={scrollToRef}
            />
        </div>
    )
}

export default Home
