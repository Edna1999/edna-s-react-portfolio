import React from "react";
import '../../styles/style.css';
import pic from '../../assets/images/IMG_3113.JPG'

export default function About() {
    return (
      <div className="card mb-3" id="about">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={pic} className="card-img" alt="edna" id="image"></img>
        </div>
        <div className="col-md-8">
          <div className="card-body" id="text">
            <h3 className="card-title" id="head">About Me</h3>
            <p className="card-text">
              A solution driven web developer adept at contibuting to highly collaborative work environments and finding solutions with my experience developing websites using front-end technologies like HTML, CSS, Vanilla JavaScript and React, Backend technologies like Node.js and Express.js and databases like MySQL and MongoDB.  
            </p>
            <p>
            With a proven ability to adapt to both self-starting and collaborative environments while staying focused on achieving high quality results. I am eager to obtain a challenging position that will expand my learning and build up my developer skills.
            Passionate about web development and knowledgable in developing projects using Scrum, Agile and Lean processes. Skilled in conceptualizing, designing, development and deploying software containing logical solutions. I am dedicated to driving innovation with the ability to follow industry and technological trends and facilitate adoptions of said trends.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}