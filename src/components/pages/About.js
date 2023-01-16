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
            <p className="card-text">My name is Edna Omadjambe. I am an entry level full stack web developer and graduate of The Ohio State University Full Stack Web Development bootcamp. 
              During my time in the bootcamp I acquired technical skills in Javascript, HTML, CSS, Bootstrap, Node.js, Express.js, MYSQL, NoSQL, MongoDB, jQuery, PWA's, jest, ReactJs, GraphQL and MERN stack.
             The bootcamp has also helped sharpen my soft skills such as teamwork, problem solving, communication, conducting research and creativity. 
            </p>
             <p> I would like to believe that over time I have become more resourceful; I make it my goal to truly understand all the new skills I have acquired. With true understanding I believe that I am better equipt to not only
             deliver great results but help others to understand the task at hand. 
            </p>
            <p>
              I am willing to learn new things and adapt to my surroundings, as well as acknowledge when I need help or dont understand something. I am that way not only in regards to 
              coding but life. I see nothing wrong in asking for help as well as seeking out knowledge for a better understanding of something. 
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}