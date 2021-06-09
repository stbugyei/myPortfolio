import React, { useState, useLayoutEffect, useRef } from "react";
import SkillsCard from "../cards/SkillsCard";
import "../styles/skills.css"

const Skills = (props) => {
    const myHtml5 = useRef(null);
    const myCss3 = useRef(null);
    const myJavascript = useRef(null);
    const myReact = useRef(null);
    const myNode = useRef(null);
    const myGit = useRef(null);
    const myMongo = useRef(null);

    const { mySkills } = props

    const [animate, setAnimate] = useState(false);

    const getStyle = (width) => {
        if (animate === true) {
            return {
                maxWidth: width + '%',
                padding: '3px',
                opacity: '1',
            };
        }
    };

    /*========== counter function ==========*/
    const widthParams = () => {

        const skillArr = [myHtml5, myCss3, myJavascript, myReact, myNode, myGit, myMongo]

        if (skillArr) {
            skillArr.forEach(element => {
                element.current.innerText = '0'

                const counterProgress = () => {
                    const speedLimit = 500
                    const targetValue = +element.current.attributes["data-target"].nodeValue;
                    const initialValue = +element.current.innerText;
                    const counter = targetValue / speedLimit;

                    if (initialValue < targetValue) {
                        element.current.innerText = Math.ceil(initialValue + counter)
                        setTimeout(counterProgress, 1)
                    } else {
                        element.current.attributes["data-target"].nodeValue = targetValue
                    }
                }
                counterProgress();
            });
        }
    }


    useLayoutEffect(() => {
        if (animate) {
            widthParams();
        }

        const animateOnScroll = () => {
            if (mySkills) {
                const scrollY = window.pageYOffset;
                const sectionHeight = mySkills.current.offsetHeight;
                const sectionTop = mySkills.current.offsetTop - 50;
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
    }, [animate, mySkills])


    return (
        <div ref={mySkills} className="skill-wrapper" >
            <SkillsCard
                animate={animate}
                myHtml5={myHtml5}
                myCss3={myCss3}
                myJavascript={myJavascript}
                myReact={myReact}
                myNode={myNode}
                myGit={myGit}
                myMongo={myMongo}
                getStyle={getStyle}
            />
        </div>
    )
}

export default Skills
