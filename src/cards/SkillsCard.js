import React from 'react'

const SkillsCard = (props) => {
    
    const {animate, myHtml5, myCss3, myJavascript, myReact, myNode, myGit, myMongo, getStyle} = props

    return (
        <>
            <ul className="skill-link__container">
                <h1 style={{ animation: animate ? 'textSlide .5s' : 'undefined' }}>SKILL SET</h1>
                <li>
                    <p> “I like to solve problems. I know it is a skill set, but it's also an obligation. I grew up with parents who believe that you don't simply complain: you try to find solutions and fix what's in front of you.”
                    </p>
                    <p>― Stacey Abrams</p>
                </li>
            </ul>

            <ul className="skill-content">
                <li className="skill-content__intro">
                    <h3>Skill set and competence</h3>
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
                        <div className="skill-item__text"><h4>HTML5</h4> <span className="skill-value" data-target="90" ref={myHtml5}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(90)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <h4>CSS3</h4> <span className="skill-value" data-target="85" ref={myCss3}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(85)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <h4>JavaScript</h4> <span className="skill-value" data-target="80" ref={myJavascript}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(80)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <h4>React.js</h4> <span className="skill-value" data-target="80" ref={myReact}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(80)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"><h4>Node.js (Express)</h4> <span className="skill-value" data-target="54" ref={myNode}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(54)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text"> <h4>GitHub</h4> <span className="skill-value" data-target="90" ref={myGit}></span><span className="skill-percentage">%</span></div>
                        <div className="progress">
                            <div className="progress-done" style={getStyle(90)}></div>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-item__text">  <h4>MongoDB</h4> <span className="skill-value" data-target="60" ref={myMongo}></span><span className="skill-percentage">%</span></div>
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
