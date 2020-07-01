import React from "react";
import htmlPic from "../images/html-css-icon.png";
import jsPic from "../images/javascript-logo.png";
import jqueryPic from "../images/jquery-logo.png";
import nodePic from "../images/nodejs-logo.png";
import handlebarsPic from "../images/handlebars-logo.png";
import passportPic from "../images/passport-icon.png";
import mysqlPic from "../images/mysql-icon.png";
import mongoPic from "../images/mongodb-icon.png";
import awsPic from "../images/aws-logo.png";

function Languages (props) {
    return (
        <div>
        <h1 className="technologies">Known Languages/Technologies:</h1>
          <div className="ui list">
            <div className="item">
              <img className="ui avatar image" id="icon" src={htmlPic} alt="html-css"/>
              <div className="content">
                <p className="header" id="tech-header">HTML/CSS</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src={jsPic} alt="javascript"/>
              <div className="content">
                <p className="header" id="tech-header">JavaScript</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src={jqueryPic} alt="jquery"/>
              <div className="content">
                <p className="header" id="tech-header">JQuery</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src={nodePic} alt="nodeJS"/>
              <div className="content">
                <p className="header" id="tech-header">NodeJS</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src={handlebarsPic} alt="handlebars"/>
              <div className="content">
                <p className="header" id="tech-header">Handlebars</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
                <img className="ui avatar image" id="icon" src={passportPic} alt="passportJS"/>
                <div className="content">
                  <p className="header" id="tech-header">Passport JS</p>
                  <div className="description"></div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" id="icon" src={mysqlPic} alt="mysql"/>
                <div className="content">
                  <p className="header" id="tech-header">MySQL</p>
                  <div className="description"></div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" id="icon" src={mongoPic} alt="mongoDB"/>
                <div className="content">
                  <p className="header" id="tech-header">MongoDB</p>
                  <div className="description"></div>
                </div>
              </div>
            <div className="item">
                <img className="ui avatar image" id="icon" src={awsPic} alt="AWS"/>
                <div className="content">
                  <p className="header" id="tech-header">Amazon Web Services</p>
                  <div className="description"></div>
                </div>
              </div>
          </div>
        </div>
          

    )
}

export default Languages;