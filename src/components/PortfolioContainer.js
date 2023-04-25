import React, { useState, useEffect } from 'react';


import '../styles/style.css';

import passwordGenerator from '../assets/images/passwordGenerator.jpeg';
import weatherDashboard from '../assets/images/weatherDashboard.jpeg';
import codingQuiz from '../assets/images/codingQuiz.jpeg';
import dailyPlanner from '../assets/images/dailyPlanner.jpeg';
import teamBoard from '../assets/images/teamBoard.jpeg';
import happyHourLog from '../assets/images/happyHourLog.png';
import ecommerceBackend from '../assets/images/ecommerceBackend.png';
import employeeTracker from '../assets/images/employeeTracker.png';
import bucketList from '../assets/images/bucketList.jpeg';
import textEditor from '../assets/images/textEditor.png';
import socialNetwork from '../assets/images/socialnetwork.png';
import movieland from '../assets/images/movieland.png';





export default function PortfolioContainer() {

  const [isVisible, setIsVisible] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [showModal7, setShowModal7] = useState(false);
  const [showModal8, setShowModal8] = useState(false);
  const [showModal9, setShowModal9] = useState(false);
  const [showModal10, setShowModal10] = useState(false);
  const [showModal11, setShowModal11] = useState(false);
  const [showModal12, setShowModal12] = useState(false);




  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  function toggleModal1() {
    setShowModal1(!showModal1);
    
  }

  function toggleModal2() {
    setShowModal2(!showModal2);
  }

  function toggleModal3() {
    setShowModal3(!showModal3);
  }


  function toggleModal4() {
    setShowModal4(!showModal4);
  }

  function toggleModal5() {
    setShowModal5(!showModal5);
  }

  function toggleModal6() {
    setShowModal6(!showModal6);
  }


  function toggleModal7() {
    setShowModal7(!showModal7);
  }

  function toggleModal8() {
    setShowModal8(!showModal8);
  }

  function toggleModal9() {
    setShowModal9(!showModal9);
  }


  function toggleModal10() {
    setShowModal10(!showModal10);
  }

  function toggleModal11() {
    setShowModal11(!showModal11);
  }

  function toggleModal12() {
    setShowModal12(!showModal12);
  }

 


 
   return (
    <div>
      <nav>
         <button id='home-btn' className='nav-btn'><a className='nav-link' href='#home'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
          </svg></a></button>
         <button className='nav-btn'><a  className='nav-link' href='#about'>About</a></button>
         <button className='nav-btn'><a className='nav-link' href='#projects'>Projects</a></button>
         <button className='nav-btn'><a className='nav-link' href='#contact'>Contact</a></button>

      </nav>

    <div id='home'>

      <p className='intro'>Hello, I am <span className='me'>Edna Omadjambe</span>. <br/> I am a Full Stack Web Developer.</p>
 
     <button className='scroll' ><a className='scroll-link' href='#about'>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg></a></button>

       </div> 

       <div id='about'>

        <h1 className={`slide-in-left ${isVisible ? 'its-visible' : ''} `} id='about-me' >About Me</h1>

         <div className='aboutContainer'>

        <div className={`slide-in-left ${isVisible ? 'its-visible' : ''}`}>
        <p className='details' >
         A solution driven  developer passionate about web development and knowledgable in developing projects using Scrum, Agile and Lean processes. Skilled in conceptualizing, designing, development and deploying software containing logical solutions. I am dedicated to driving innovation with the ability to follow industry and technological trends and facilitate adoptions of said trends.
         </p>
         </div>

      <div  className={`slide-in-right ${isVisible ? 'is-visible' : ''}`}>
       <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">HTML
      <div className="progress-bar " style={{width: '90%', backgroundColor: 'rgb(32, 158, 158)'}}>90%</div>
      </div>
   

      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">CSS
      <div className="progress-bar " style={{width: '90%', backgroundColor: 'rgb(32, 158, 158)'}}>90%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">JavaScript
      <div className="progress-bar " style={{width: '85%', backgroundColor: 'rgb(32, 158, 158)'}}>85%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">React
      <div className="progress-bar " style={{width: '75%', backgroundColor: 'rgb(32, 158, 158)'}}>75%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Express
      <div className="progress-bar " style={{width: '85%', backgroundColor: 'rgb(32, 158, 158)'}}>85%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Node
      <div className="progress-bar " style={{width: '85%', backgroundColor: 'rgb(32, 158, 158)'}}>85%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">MongoDB
      <div className="progress-bar " style={{width: '60%', backgroundColor: 'rgb(32, 158, 158)'}}>60%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">MySQL
      <div className="progress-bar " style={{width: '75%', backgroundColor: 'rgb(32, 158, 158)'}}>75%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">BootStrap
      <div className="progress-bar " style={{width: '95%', backgroundColor: 'rgb(32, 158, 158)'}}>95%</div>
      </div>


      <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">jQuery
      <div className="progress-bar " style={{width: '50%', backgroundColor: 'rgb(32, 158, 158)'}}>50%</div>
      </div>

      </div>
     
      </div>


    <div className={`slide-in-right ${isVisible ? 'is-visible' : ''}`}>

      <div className='icon'>

      <div className='group'>
      <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className=" char bi bi-clipboard-check-fill" viewBox="0 0 16 16">
      <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
      </svg>
      <h5>Organization</h5>

      <p className='add-on'>Able to self manage in independent projects by consciously planning out tasks and giving it my all.</p>
      </div>

      <div className='group'>
         <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="char bi bi-people-fill" viewBox="0 0 16 16">
         <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
         </svg>
         <h5>Collaboration</h5>

         <p className='add-on'>Highly collaborative and thoroughly enjoy working with others to bring a different ideas and talents together to create something great. </p>
      </div>

      


      <div className='group'>
         <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="char bi bi-check2-square" viewBox="0 0 16 16">
         <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
         <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
         </svg>
         <h5>Problem Solving</h5>

         <p className='add-on'>Successfully identify and resolve both complex and minor issues. I will do everything in my power to  produce great results.   </p>
      </div>
    
      </div>
      </div>
      </div>

      <div id='work' > 

        <h1 id='projects'>Projects</h1>

        <div className="pro one" >

        
        <img src={bucketList} className="image" alt="bucket list">
        </img>
      
       
        <button onClick={()=> {
          toggleModal1()
         
        }}
          className='learn-more'
       
          >Learn More</button>

        {showModal1 && (
          

    <div className="modal-container " >
      <div className="modal-header">
        <h5 className="modal-title">Bucket List<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal1} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a app created using ReactJS and NodeJS to add activities to a bucketlist as well as prioritize those activities.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary modal-btn" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://edna1999.github.io/bucket-list/" >View Site</a></button>
      </div>
    </div>
   
      )}
        
   </div>

        
        <div className="pro"  >
          
        <img src={movieland} className="image movie"alt="movieland" />
        
        
        <div className='text-overlay'>
        <button onClick={toggleModal2}
          className='learn-more'>Learn More</button>



        {showModal2 && (

    <div className="modal-container ">
  
      <div className="modal-header">
        <h5 className="modal-title">MovieLand <hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal2} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a app created using ReactJS, OMDB (third-party) api and NodeJS to look up tv shows and movies.</p>

      </div>

      <div className="modal-footer">

  
        <button type="button" className=" btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px  rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://mighty-depths-05925.herokuapp.com/" >View Site</a></button>
      </div>
    </div>
   
       
      )}
            
        </div>
       
        </div>
          
           <div className="pro" >

           <img src={codingQuiz} className="image"alt="coding quiz"></img>

           <div className='text-overlay'>
           <button onClick={toggleModal3}
          className='learn-more'>Learn More</button>

        {showModal3 && (

    <div className="modal-container ">
      <div className="modal-header">
        <h5 className="modal-title">Coding Quiz<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal3} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a coding quiz created using HTML, CSS and Vanilla JavaScript. The quiz is timed and if one of the questions is answered wrong time will be deducted. At the end of the quiz your results will showcase as well.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px  rgba(59, 59, 60, 0.643)'}}><a  className='view-site' href="https://edna1999.github.io/coding-quiz/">View Site</a></button>
      </div>
    </div>
 
       
      )}
            
        </div>
          
          
            
          </div>

          <div className="pro one" >

          <img src={textEditor} className="image"alt="text editor"></img>

          <div className='text-overlay'>
          <button onClick={toggleModal4}
          className='learn-more'>Learn More</button>

        {showModal4 && (

    <div className="modal-container ">
      <div className="modal-header">
        <h5 className="modal-title">Text Editor<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal4} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a app created using ReactJS and NodeJS to add activities to a bucketlist as well as prioritize those activities..</p>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://calm-lowlands-90253.herokuapp.com/">View Site</a></button>
      </div>
    </div>
    
       
      )}
              
          </div>
          
         
            
          </div>

          <div className="pro" >
          
          <img src={weatherDashboard} className="image"alt="weather board"></img>

          <div className='text-overlay'>
          <button onClick={toggleModal5}
          className='learn-more'>Learn More</button>

        {showModal5 && (

    <div className="modal-container " >
      <div className="modal-header">
        <h5 className="modal-title">Weather Dashboard<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal5} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a weather dashboard created using HTML, CSS, open weather (third-party) api and Vanilla JavaScript. It shows the temperature, humidity and wind speeds for the current day as well as five days in advance in cities all over the world.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px  rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://edna1999.github.io/weather-dashboard/">View Site</a></button>
      </div>
    </div>
   
       
      )}
        </div>
         
            
          </div>

          <div className="pro" >

          <img src={happyHourLog} className="image"alt="happy hour log"></img>
          
          <div className='text-overlay'>
          <button onClick={toggleModal6}
          className='learn-more'>Learn More</button>

        {showModal6 && (

    <div className="modal-container ">
      <div className="modal-header">
        <h5 className="modal-title">Happy Hour Log<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal6} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a app created using an MVC paradigm, NodeJS, ExpressJS, MySQL (sequilize) and handlebars.js to log happy hour deals. Users can create a profile, log deals and view their logs as well as view other users posts.</p>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px  rgba(59, 59, 60, 0.643)'}}><a className='view-site'href="https://happyhourlog.herokuapp.com/">View Site</a></button>
      </div>
    </div>
 
       
      )}
            
        </div>
         
            
          </div>

          <div className="pro one" >

          <img  src={passwordGenerator} alt='password generator' className="image" ></img>
          
          <div className='text-overlay'>
          <button onClick={toggleModal7}
          className='learn-more'>Learn More</button>

        {showModal7 && (

    <div className="modal-container " >
      <div className="modal-header">
        <h5 className="modal-title">Password Generator<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal7} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a password  generator created using HTML, CSS, and Vanilla JavaScript. A prompt appears when the generate button is pressed with questions to do with how many characters you'd like the password to contain and what type of characters you want included in the password and once all the information is filled out a random password is created for you.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px rgba(59, 59, 60, 0.643)'}}><a  className='view-site'href="https://edna1999.github.io/Random-generator//">View Site</a></button>
      </div>
    </div>
    
       
      )}
            
        </div>
                
  
            
          </div>

          <div className="pro" >

          <img src={socialNetwork} className="image"alt="social network"></img>

          <div className='text-overlay'>
          <button onClick={toggleModal8}
          className='learn-more'>Learn More</button>

        {showModal8 && (

    <div className="modal-container " >
      <div className="modal-header">
        <h5 className="modal-title">Social Network<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal8} style={{marginRight:'10px'}} ></button>
       
      </div>
      <div className="modal-body">
        <p>This is a app created using ExpressJS, NodeJS and MongoDB showcasing what the backend of a social network would look like.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://watch.screencastify.com/v/INnqrVytfZlySehkUGsR">Walk-through Video</a></button>
      </div>
    </div>
   
       
      )}
        </div>
        
            
          </div>

          <div className="pro" >

          <img src={teamBoard} className="image" alt="team board"></img>
            

          <div className='text-overlay'>
          <button onClick={toggleModal9}
          className='learn-more'>Learn More</button>

        {showModal9 && (

    <div className="modal-container " >
      <div className="modal-header">
        <h5 className="modal-title">Team Board Generator<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal9} style={{marginRight:'10px'}} ></button>
      </div>
      <div className="modal-body">
        <p>This is an app created using ExpressJS and NodeJS to build an HTML page containing a team board from your terminal. The styling was done using both bootstrap and CSS.</p>
      </div>
      <div className="modal-footer">
      
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px  rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://edna1999.github.io/bucket-list/">View Site</a></button>
      </div>
    </div>
   
       
      )}
            
        </div>
          
      
          </div>

          <div className="pro one" >

          <img src={ecommerceBackend} className="image"alt="ecommerce backend"></img>
            

          <div className='text-overlay'>
          <button onClick={toggleModal10}
          className='learn-more'>Learn More</button>

        {showModal10 && (

    <div className="modal-container " >
      <div className="modal-header">
        <h5 className="modal-title">eCommerce Backend<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal10} style={{marginRight:'10px'}} ></button>
      </div>
      <div className="modal-body">
        <p>This is a app created using ExpressJS, MySQL(sequilize) to create, map and test APIs, demonstrating Back-End ability.
       </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://watch.screencastify.com/v/fBYcbMFWY00qV05cvrMG">Walk-through video</a></button>
      </div>
    </div>
   
       
      )}
            
        </div>
          
       
          </div>

          <div className="pro" >

          <img src={employeeTracker} className="image" alt="employee-tracker"></img>

          <div className='text-overlay'>
          <button onClick={toggleModal11}
          className='learn-more'>Learn More</button>

        {showModal11 && (

    <div className="modal-container ">
      <div className="modal-header">
        <h5 className="modal-title">Employee Tracker<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal11} style={{marginRight:'10px'}} ></button>
      </div>
      <div className="modal-body">
        <p>This app is an employee tracker run through the terminal.With the use of NodeJS, ExpressJS and MySQL this app showcases and tracks employee information allowing users to view all departments, view all roles, view all employees, add a department, add a role, add an employee or update an employee. </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px  rgba(59, 59, 60, 0.643)'}}><a className='view-site'  href="https://watch.screencastify.com/v/58rzmCct0eBPSRyx2WPF">Walk-Through video</a></button>
      </div>
    </div>
   
       
      )}
            
        </div>
        

          </div>

          <div className="pro" >

          <img src={dailyPlanner} className="image"alt="daily planner"></img>

          <button onClick={toggleModal12}
          className='learn-more'>Learn More</button>

        {showModal12 && (

    <div className="modal-container ">
      <div className="modal-header">
        <h5 className="modal-title">Daily Planner<hr/></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggleModal12} style={{marginRight:'10px'}} ></button>
      </div>
      <div className="modal-body">
        <p>This is a daily planner created using HTML, CSS and Vanilla JavaScript. The boxes with a grey background are for past times. The box with a red background is the current time. The boxes with a green background are for future times. Once information has been typed into the box it should save once the blue save button on the side is clicked. If the page is refreshed the data should still remain on the page. </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" style={{marginRight:'10px', backgroundColor:'rgb(196, 126, 221, 0.804)', border:'none', boxShadow: '1px 1px 1px 1px rgba(59, 59, 60, 0.643)'}}><a className='view-site' href="https://edna1999.github.io/Daily-Planner/">View Site</a></button>
      </div>
    </div>
   
       
      )}
        
          </div>

      </div>

     
    

    <footer >
      <ul className="footer" id='contact'>
      <li><a className="link" href="mailto:eomadjambe@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="con bi bi-envelope-at" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
      </svg></a></li>
      <li><a className="link" href="https://github.com/Edna1999?tab=repositories"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" con bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg></a></li>
      <li><a className="link" href="https://www.linkedin.com/in/edna1999/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className=" con bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
      </svg></a></li>

    </ul>
    </footer>

        
        
       </div>
 
   );

}