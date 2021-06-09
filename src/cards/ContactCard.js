import React from 'react'

const ContactCard = (props) => {

    const { handleSubmit, sentEmail, animate, nameErr, inputFieldStyle, nameSuccess, info, handleChange, errorText, emailErr, emailSuccess, subjectSuccess, subjectErr, messageErr, messageSuccess, makeBtnActive } = props

    return (

        <ul className="contact-content">
            <div className={sentEmail !== "" ? "notification-wrapper" : "hide-notification"}  >
                <div className="btn-notification">
                    <span><i className="far fa-envelope"></i></span>
                    <span>{sentEmail}</span>
                </div>
            </div>

            <li className="socialmedia">

                <a className="github" href="https://github.com/stbugyei?tab=repositories" target="_blank" rel="noopener noreferrer" >
                    <p> <i className="fab fa-github-square"></i> Github</p>
                </a>

                <a className="linkedin" href="https://www.linkedin.com/in/emmanuel-o-bugyei-47069383/" target="_blank" rel="noopener noreferrer" >
                    <p> <i className="fab fa-linkedin"></i> linkedin</p>
                </a>

                <a className="facebook" href="https://en-gb.facebook.com/login/" target="_blank" rel="noopener noreferrer" >
                    <p> <i className="fab fa-facebook-square"></i> facebook</p>
                </a>

            </li>
            <li className="contact-form">
                <form className="form" onSubmit={handleSubmit} >
                    <div className="form-content" >
                        <div className="sender-details">
                            <div className="form-group">
                                <div className="form-group__nameicon">
                                    <span>Name:</span>
                                    <span><i className="fas fa-user"></i></span>
                                </div>

                                <input type="text"
                                    className={nameErr.nameTxt === undefined ? "form-control" : "form-control__annex"}
                                    style={inputFieldStyle(nameSuccess.success)}
                                    name="name"
                                    value={info.name || ""}
                                    onChange={handleChange}
                                    placeholder="Enter your name" />

                                {nameErr.nameTxt !== undefined ? <span style={errorText}> <span style={{ color: '#b71c1c' }}><i className="fas fa-info-circle"></i></span> {nameErr.nameTxt}</span> : ""}
                            </div>

                            <div className="form-group">
                                <div className="form-group__nameicon">
                                    <span>Email:</span>
                                    <span><i className="fas fa-envelope"></i></span>
                                </div>
                                <input type="email"
                                    className={emailErr.emailTxt === undefined ? "form-control" : "form-control__annex"}
                                    style={inputFieldStyle(emailSuccess.success)}
                                    id="email"
                                    name="email"
                                    value={info.email || ""}
                                    onChange={handleChange}
                                    placeholder="Enter email address" />

                                {emailErr.emailTxt !== undefined ? <span style={errorText}> <span style={{ color: '#b71c1c' }}><i className="fas fa-info-circle"></i> </span>{emailErr.emailTxt}</span> : ""}
                            </div>

                            <div className="form-group">
                                <div className="form-group__nameicon">
                                    <span>Message Title:</span>
                                    <span><i className="fas fa-pen-alt"></i></span>
                                </div>
                                <input
                                    className={subjectErr.subjectTxt === undefined ? "form-control" : "form-control__annex"}
                                    style={inputFieldStyle(subjectSuccess.success)}
                                    id="subject"
                                    name="subject"
                                    value={info.subject || ""}
                                    onChange={handleChange}
                                    placeholder="Enter Title" />

                                {subjectErr.subjectTxt !== undefined ? <span style={errorText}> <span style={{ color: '#b71c1c' }}><i className="fas fa-info-circle"></i></span> {subjectErr.subjectTxt}</span> : ""}
                            </div>
                        </div>

                        <div className="textarea">
                            <div className="form-group">
                                <textarea
                                    className={messageErr.messageTxt === undefined ? "form-control" : "form-control__annex"}
                                    style={inputFieldStyle(messageSuccess.success)}
                                    name="message"
                                    value={info.message || ""}
                                    onChange={handleChange}
                                    cols="50" rows="9" placeholder="Enter Message">
                                </textarea>

                                {messageErr.messageTxt !== undefined ? <span style={errorText}> <span style={{ color: '#b71c1c' }}> <i className="fas fa-info-circle"></i></span> {messageErr.messageTxt}</span> : ""}
                            </div>
                        </div>

                    </div>

                    <button type='submit' className="btn-submit" style={makeBtnActive()}>
                        <span style={{ animation: animate ? 'btnzoom .5s' : 'undefined' }}><i className="far fa-envelope"></i></span>
                        <span>Send Message</span>
                    </button>
                </form>
            </li>
        </ul>
    )
}

export default ContactCard
