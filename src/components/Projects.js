import React from "react";

function Projects (props) {
    return (
        <div>

            <h1 className="projects">Checkout some of my previous work!</h1>
                <div className="ui three stackable cards">

                    <div className="card">
                        <div className="image">
                            <img src={} alt=""/>
                        </div>
                        <div className="content">
                            <a className="header">Dine or Dash</a>
                        <div className="meta">
                              <span className="date">Full-Stack Web Application</span>
                        </div>
                        <div className="description">
                            Dine or Dash is a collaborative project I worked on that allows users to swipe (like or dislike) restaurants around them or in a desired city. Built with: nodejs, ES6, CoffeeScript, express, Yelp API, SemanticUI.
                        </div>
                        <a className="ui button" id="repoBtn" href="https://github.com/rwilliamsIII/dine-or-dash" target="_blank">GitHUB Repo</a>
                        <a className="ui button" id="live-linkBtn" href="https://agile-beyond-76515.herokuapp.com/" target="_blank">Live Link</a>
                        </div>
                        </div>

                        <div className="card">
                          <div className="image">
                            <img src={} alt=""/>
                          </div>
                          <div className="content">
                            <a className="header">GHC Website</a>
                            <div className="meta">
                              <span className="date">Website I created for local AC company</span>
                            </div>
                            <div className="description">
                              Built with HTML/CSS/PHP. Hosted on AWS.
                            </div>
                            <a className="ui button" id="repoBtn" href="" target="_blank">GitHUB Repo</a>
                            <a className="ui button" id="live-linkBtn" href="http://www.goodlettsvillehandc.com/" target="_blank">Live Link</a>
                          </div>
                        </div>

                        <div className="card">
                          <div className="image">
                            <img src={} alt=""/>
                          </div>
                          <div className="content">
                            <a className="header">Burger Shop</a>
                            <div className="meta">
                              <span className="date">Full-Stack Web Application</span>
                            </div>
                            <div className="description">
                              Burger Shop app I created using handlebars and mysql. User can add and devour hamburgers of their choosing as well as delete burgers they no longer want in the database.
                            </div>
                            <a className="ui button" id="repoBtn" href="https://github.com/rwilliamsIII/Burger-Shop" target="_blank">GitHUB Repo</a>
                            <a className="ui button" id="live-linkBtn" href="https://intense-basin-19178.herokuapp.com/" target="_blank">Live Link</a>
                          </div>
                        </div>

                        <div className="card">
                          <div className="image">
                            <img src={} alt=""/>
                          </div>
                          <div className="content">
                            <a className="header">Directions App</a>
                            <div className="meta">
                              <span className="date">Web Application</span>
                            </div>
                            <div className="description">
                              Application built using Google Maps & OpenWeatherMaps Api. The application lets users get directions for a trip they are planning and get current weather for destination city. If trip is over 500 miles the user will be given the option to book a flight from trip advisor.
                            </div>
                            <a className="ui button" id="repoBtn" href="https://github.com/rwilliamsIII/directions-weather" target="_blank">GitHUB Repo</a>
                            <a className="ui button" id="live-linkBtn" href="https://rwilliamsiii.github.io/directions-weather/" target="_blank">Live Link</a>
                          </div>
                        </div>

                        <div className="card">
                          <div className="image">
                            <img src={} alt=""/>
                          </div>
                          <div className="content">
                            <a className="header">ReadMe Generator</a>
                            <div className="meta">
                              <span className="date">Node Application</span>
                            </div>
                            <div className="description">
                              A node application built with inquirer that asks the user a series of questions then generates a readme template based on the responses.
                            </div>
                            <a className="ui button" id="repoBtn" href="https://github.com/rwilliamsIII/readme-generator" target="_blank">GitHUB Repo</a>
                            <a className="ui button" id="live-linkBtn" href="" target="_blank">Live Link</a>
                          </div>
                        </div>

                        <div className="card">
                          <div className="image">
                            <img src={} alt=""/>
                          </div>
                          <div className="content">
                            <a className="header">Employee Tracker</a>
                            <div className="meta">
                              <span className="date">Node Application</span>
                            </div>
                            <div className="description">
                              A node application that allows users to build and manage development team info.
                            </div>
                            <a class="ui button" id="repoBtn" href="https://github.com/rwilliamsIII/employee-tracker" target="_blank">GitHUB Repo</a>
                            <a className="ui button" id="live-linkBtn" href="" target="_blank">Live Link</a>
                          </div>
                        </div>

                    </div>


        </div>
    )
}

export default Projects