import React from "react";
import bioPic from "../images/bio-pic.jpg";

function Biocard(props) {
    return  <div className="card" style={{width: "18rem"}}>
    <img src={bioPic} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Welcome!</h5>
      <p className="card-text">Hello, my name is Robert Williams! I am a full-stack web developer working out of Nashville, TN. I especially enjoy backend development, but just overall enjoy developing responsive web applications. Feel free to look at some of my work or contact me with the button below!</p>
    </div>
  </div>
}



export default Biocard;