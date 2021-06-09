import React from 'react'

const NavCard = (props) => {

    const { myHome, aboutMe, myServices, mySkills, myDemos, myContact, scrollToRef, getColorStyle, isopen, nameAttribute, closeNavBar } = props

    return (
        <ul className={isopen ? 'hidenav' : 'undefined'} style={getColorStyle()}>

            <div className="liwrapper">

                <li>
                    <button className={nameAttribute !== "home-wrapper" ? "undefined" : "activenav"} onClick={() => { closeNavBar(); scrollToRef(myHome) }} > HOME </button>
                </li>

                <li>
                    <button className={nameAttribute !== "about-wrapper" ? "undefined" : "activenav"} onClick={() => { closeNavBar(); scrollToRef(aboutMe) }}> ABOUT </button>
                </li>

                <li>
                    <button className={nameAttribute !== "skill-wrapper" ? "undefined" : "activenav"} onClick={() => { closeNavBar(); scrollToRef(mySkills) }}> SKILLS </button>
                </li>

                <li>
                    <button className={nameAttribute !== "service-wrapper" ? "undefined" : "activenav"} onClick={() => { closeNavBar(); scrollToRef(myServices) }}> SERVICES </button>
                </li>

                <li>
                    <button className={nameAttribute !== "demo-wrapper" ? "undefined" : "activenav"} onClick={() => { closeNavBar(); scrollToRef(myDemos) }} > DEMOS </button>
                </li>

                <li>
                    <button className={nameAttribute !== "contact-wrapper" ? "undefined" : "activenav"} onClick={() => { closeNavBar(); scrollToRef(myContact) }}> CONTACT </button>
                </li>
            </div>
        </ul>

    )
}

export default NavCard
