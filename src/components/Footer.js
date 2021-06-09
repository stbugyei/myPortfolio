import React from "react";
import "../styles/footer.css"

const Footer = (props) => {

    const { myHome, aboutMe, myServices, mySkills, myDemos, myContact, myFooter, scrollToRef } = props

    return (

        <div ref={myFooter} className="footer-wrapper">
             <div className="footer-top"></div>
            <div className='footer__container'>
                <div className='footer-content'>
                    <span className='Footer-title'>
                        <p>EMMANUEL BUGYEI</p>
                    </span>
                    <p>A Building Technologist, Computer Hardware Technician, Systems Security Analyst, turned Web Developer.</p>
                </div>

                <div className='footer-content'>
                    <span className='Footer-title'>
                        <p>browse</p>
                    </span>

                    <p className='Footer-link' onClick={() => scrollToRef(myHome)}>Home</p>
                    <p className='Footer-link' onClick={() => scrollToRef(aboutMe)}>About</p>
                    <p className='Footer-link' onClick={() => scrollToRef(mySkills)}>Skills</p>
                    <p className='Footer-link' onClick={() => scrollToRef(myServices)}>Services</p>
                    <p className='Footer-link' onClick={() => scrollToRef(myDemos)}>Demos</p>
                    <p className='Footer-link' onClick={() => scrollToRef(myContact)}>Contact</p>
                </div>

                <div className='footer-content'>
                    <span className='Footer-title'>
                        <p>Check me out</p>
                    </span>

                    <a className="github" href="https://github.com/stbugyei?tab=repositories" target="_blank" rel="noopener noreferrer" >
                        <p> <i className="fab fa-github-square"></i> Github</p>
                    </a>

                    <a className="linkedin" href="https://www.linkedin.com/in/emmanuel-o-bugyei-47069383/" target="_blank" rel="noopener noreferrer" >
                        <p> <i className="fab fa-linkedin"></i> linkedin</p>
                    </a>

                    <a className="facebook" href="https://en-gb.facebook.com/login/" target="_blank" rel="noopener noreferrer" >
                        <p> <i className="fab fa-facebook-square"></i> facebook</p>
                    </a>
                </div>


                <div className='footer-content'>
                    <span className='Footer-title'onClick={() => scrollToRef(myHome)}>
                        <p style={{ cursor: 'pointer'}}>Stbugyei &#xA9;</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer
