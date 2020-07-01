import React from "react";

function Languages (props) {
    return (
        <div>
        <h1 className="technologies">Known Languages/Technologies:</h1>
          <div className="ui list">
            <div className="item">
              <img className="ui avatar image" id="icon" src="assets/images/html-css-icon.png" alt=""/>
              <div className="content">
                <p className="header" id="tech-header">HTML/CSS</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src="assets/images/javascript-logo.png" alt=""/>
              <div className="content">
                <p className="header" id="tech-header">JavaScript</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src="assets/images/jquery-logo.png" alt=""/>
              <div className="content">
                <p className="header" id="tech-header">JQuery</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src="assets/images/nodejs-logo.png" alt=""/>
              <div className="content">
                <p className="header" id="tech-header">NodeJS</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
              <img className="ui avatar image" id="icon" src="assets/images/handlebars-logo.png" alt=""/>
              <div className="content">
                <p className="header" id="tech-header">Handlebars</p>
                <div className="description"></div>
              </div>
            </div>
            <div className="item">
                <img className="ui avatar image" id="icon" src="assets/images/passport-icon.png" alt=""/>
                <div className="content">
                  <p className="header" id="tech-header">Passport JS</p>
                  <div className="description"></div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" id="icon" src="assets/images/mysql-icon.png" alt=""/>
                <div className="content">
                  <p className="header" id="tech-header">MySQL</p>
                  <div className="description"></div>
                </div>
              </div>
              <div className="item">
                <img className="ui avatar image" id="icon" src="assets/images/mongodb-icon.png" alt=""/>
                <div className="content">
                  <p className="header" id="tech-header">MongoDB</p>
                  <div className="description"></div>
                </div>
              </div>
            <div className="item">
                <img className="ui avatar image" id="icon" src="assets/images/aws-logo.png" alt=""/>
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