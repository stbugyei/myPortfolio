import React, { useState, useLayoutEffect } from "react";
import SuccessFormValidation from "./SuccessFormValidation"
import ErrorFormValidation from "./ErrorFormValidation"
import "../styles/contact.css"
import ContactCard from '../cards/ContactCard'

const Contact = (props) => {

    const { myContact } = props

    const [info, setInfo] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const [sentEmail, setSentEmail] = useState("");

    const { nameSuccess, subjectSuccess, emailSuccess, messageSuccess} = SuccessFormValidation();

    const { nameErr, subjectErr, emailErr, messageErr, errorInputValidation } = ErrorFormValidation();

    const [animate, setAnimate] = useState(false);

     //================ scroll events with function =================
    useLayoutEffect(() => {

        const animateOnScrollScroll = () => {
            if (myContact) {
                let scrollY = window.pageYOffset;
                const sectionHeight = myContact.current.offsetHeight;
                const sectionTop = myContact.current.offsetTop - 50;
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
    }, [animate, myContact])

    //================ activate submit button Function =================
    const makeBtnActive = () => {
        if ((info.name !== "")
            && (info.subject !== "")
            && (info.email !== "")
            && (info.message !== "")) {
            return {
                color: '#fff',
                cursor: 'pointer',
                pointerEvents: 'initial',
                backgroundColor: '#aeb2f3'
            }
        }
    }

    //================ Outline inputfield Function =================
    const inputFieldStyle = (errorTxt) => {

        if (animate) {
            return {
                animation: 'progressAnnex 0.8s'
            };
        }
        if (errorTxt !== 'undefined') {
            return {
                // borderColor: 'red'
            }
        }
    }

    const errorText = {
        fontSize: '15px', display: 'block', margin: '5px 0px', color: 'red'
    }

    //================ onChange Function =================
    const handleSubmit = (e) => {
        e.preventDefault();
        const isError = errorInputValidation(info);
        if (isError === true) {
            setSentEmail("Thank's For Your Message")
            setTimeout(() => {
                info.name = "";
                info.email = "";
                info.subject = "";
                info.message = "";
                setSentEmail("")
            }, 3000);
            sendEmailWithSendInBlue();
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

    //========== Email notification function ==========
    const sendEmailWithSendInBlue = () => {
        const API_KEY = `${process.env.REACT_APP_EMAIL_API_KEY}`;
        const url = 'https://api.sendinblue.com/v3/smtp/email';

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'api-key': API_KEY
            },
            body: JSON.stringify({
                sender: { name: info.name, email: info.email },
                to: [{ email: 'stbugyei@yahoo.co.uk', name: 'Emmanuel' }],
                textContent: info.message,
                subject: info.subject
            })
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));

    }

    return (
        <div ref={myContact} className="contact-wrapper">

            <h1>CONTACT</h1>

            <h2>Send me a message and let start a project</h2>

            <ContactCard
                handleSubmit={handleSubmit} sentEmail={sentEmail} animate={animate} nameErr={nameErr} inputFieldStyle={inputFieldStyle} nameSuccess={nameSuccess} info={info} handleChange={handleChange} errorText={errorText} emailErr={emailErr} emailSuccess={emailSuccess} subjectSuccess={subjectSuccess} subjectErr={subjectErr} messageErr={messageErr} messageSuccess={messageSuccess} makeBtnActive={makeBtnActive}
            />
        </div>
    )
}

export default Contact
