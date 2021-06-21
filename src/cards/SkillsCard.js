import React from 'react'

const SkillsCard = (props) => {
    
    const {animate, myHtml5, myCss3, myJavascript, myReact, myNode, myGit, myMongo, getStyle} = props

    return (
        <>
            <ul className="skill-link__container">
                <li><h1 style={{ animation: animate ? 'textSlide .5s' : 'undefined' }}>SKILL SET</h1></li>
                <li>
                    <p> “I like to solve problems. I know it is a skill set, but it's also an obligation. I grew up with parents who believe that you don't simply complain: you try to find solutions and fix what's in front of you.”
                    </p>
                    <p>― Stacey Abrams</p>
                </li>
            </ul>

            <ul className="skill-content">
                <li className="skill-content__intro">
                    <p className="skill-content__sub">Skill set and competence</p>
                    <p>
                        I always crave to enhance my skills by constantly familiarizing myself with current technologies relating to front-end and web development.
                    </p>
                    <p>
                        My current skill set includes: HTML5, CSS3, JavaScript, React.js, Git and GitHub, MongoDB, Node.js (Express).
                    </p>

                    <ul className="skill-icon">
                        <li> <i className="fab fa-html5"></i></li>
                        <li> <i className="fab fa-css3-alt"></i></li>
                        <li><i className="fab fa-js-square"></i></li>
                        <li><i className="fab fa-react"></i></li>
                        <li><i className="fab fa-github"></i></li>
                        <li><i className="fab fa-node-js"></i></li>
                        <li></li>
                    </ul>
                </li>

                <li className="skill-content__graph">
                    <div className="skill-item">
                        <div className="skill-item__text"><p>HTML5</p> <span className="skill-value" data-target="90" ref={myHtml5}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(90)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <p>CSS3</p> <span className="skill-value" data-target="85" ref={myCss3}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(85)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <p>JavaScript</p> <span className="skill-value" data-target="80" ref={myJavascript}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(80)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <p>React.js</p> <span className="skill-value" data-target="80" ref={myReact}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(80)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"><p>Node.js (Express)</p> <span className="skill-value" data-target="54" ref={myNode}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(54)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <p>GitHub</p> <span className="skill-value" data-target="90" ref={myGit}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(90)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text">  <p>MongoDB</p> <span className="skill-value" data-target="60" ref={myMongo}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(60)}></div>
                        </div>
                    </div>

                </li>
            </ul>
        </>
    )
}

export default SkillsCard
