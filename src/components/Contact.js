import React from "react";
import emailPic from "../images/email-logo.png";
import githubPic from "../images/github-logo.jpg";
import linkedinPic from "../images/linkedin-logo.png"

function Contact (props) {
    return (
        <div>

            <div className="contact-icons">
                <a className="ui blue image label" href="mailto:robert@a3marketing.com">
                    <img src={emailPic} alt="Email"/>
                    <div className="detail">Email</div>
                </a>
                <a className="ui blue image label" href="https://github.com/rwilliamsIII" target="/_blank">
                    <img src={githubPic} alt="GitHub"/>
                    <div className="detail">GitHUB</div>
                </a>
                <a className="ui blue image label" href="https://www.linkedin.com/in/robertwilliams2715/" target="/_blank">
                    <img src={linkedinPic} alt="LinkedIN"/>
                    <div className="detail">LinkedIN</div>
                </a>
            </div>

        </div>
    )
}

export default Contact;