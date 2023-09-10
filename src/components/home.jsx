import Navbar from "./navbar"
import React from 'react'
import { TypeAnimation } from "react-type-animation"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

export default function Home(){
    return (
        <div className = "homepage">
            <div>
                <h1>Bryan Truong</h1>
            </div>
            <div className="typedAnimation">
                <TypeAnimation
                    sequence={[
                        "Hi there!",
                        1000
                        ,
                        "I'm an aspiring developer.",
                        1000
                    ]}
                    speed = {50}
                    repeat = {Infinity}
                    style={{fontSize: '2em'}}
                ></TypeAnimation>
                <div className = "logos">
                    <a href="https://github.com/BryanNTruong" target="_blank">
                    <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/bryan-nghi-truong" target="_blank">
                    <AiFillLinkedin />
                    </a>                              
                </div>
            </div>
        </div>
    )
}