import React from 'react';
import '../../styles/style.css';
import passwordGenerator from '../../assets/images/passwordGenerator.jpeg';
import weatherDashboard from '../../assets/images/weatherDashboard.jpeg';
import codingQuiz from '../../assets/images/codingQuiz.jpeg';
import dailyPlanner from '../../assets/images/dailyPlanner.jpeg';
import teamBoard from '../../assets/images/teamBoard.jpeg';
import happyHourLog from '../../assets/images/happyHourLog.png';
import ecommerceBackend from '../../assets/images/ecommerceBackend.png';
import noteTaker from '../../assets/images/noteTaker.png';
import employeeTracker from '../../assets/images/employeeTracker.png';
import bucketList from '../../assets/images/bucketList.jpeg'



export default function Portfolio() {
    return (
        <div>

<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a href="https://edna1999.github.io/Random-generator/">

    <div className="card bg-dark text-white" id="work">
      <img  src={passwordGenerator} alt='password generator' class="card-img-top" ></img>
      
        <h5 className="card-title">Random Password Generator</h5>
        
    </div>
     
    </a>
    <a className='repo' href='https://github.com/Edna1999/Random-generator.git'>[repo]</a>
</div>

<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a  href="https://edna1999.github.io/Daily-Planner/">
    <div className="card bg-dark text-white" id="work">
        <img src={dailyPlanner} class="card-img-top" alt="daily planner"></img>
       
          <h5 className="card-title">Daily Planner</h5>
     </div>
  </a>
  <a className='repo' href='https://github.com/Edna1999/Daily-Planner'>[repo]</a>

</div>


<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a  href="https://edna1999.github.io/coding-quiz/">
    <div className="card bg-dark text-white" id="work">
    <img src={codingQuiz} class="card-img-top" alt="coding quiz"></img>

          <h5 className="card-title">Coding Quiz</h5> 
          </div>
  </a>
  <a className='repo' href='https://github.com/Edna1999/coding-quiz'>[repo]</a>

</div>

<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a   href="https://edna1999.github.io/weather-dashboard/">
    <div className="card bg-dark text-white" id="work">
    <img src={weatherDashboard} class="card-img-top" alt="weather board"></img>

          <h5 className="card-title">Weather Dashboard</h5>
         </div>

  </a>
  <a className='repo' href='https://github.com/Edna1999/weather-dashboard'>[repo]</a>

</div>


<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a  href="https://possessed-pirate-93340.herokuapp.com/">
    <div className="card bg-dark text-white" id="work">
    <img src={happyHourLog} class="card-img-top" alt="happy hour log"></img>

          <h5 className="card-title">Happy Hour Log</h5>
         </div>
  </a>
  <a className='repo' href='https://github.com/clbutl/happy-hour-log.git'>[repo]</a>

</div>


<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a   href="https://edna1999.github.io/bucket-list/">
    <div className="card bg-dark text-white" id="work">
    <img src={bucketList} class="card-img-top" alt="bucket list"></img>

          <h5 className="card-title">Bucket list</h5>
         </div>

  </a>
  <a className='repo' href='https://github.com/Edna1999/bucket-list.git'>[repo]</a>

</div>

<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a  href="https://github.com/Edna1999/team-board">
    <div className="card bg-dark text-white" id="work">
    <img src={teamBoard} class="card-img-top" alt="team board"></img>

         
           <h5 className="card-title">Team Board [repo]</h5>
          </div>
   </a>
   <p></p>
</div>

<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a href="https://github.com/Edna1999/e-commerce-back-end.git">
    <div className="card bg-dark text-white" id="work">
    <img src={ecommerceBackend} class="card-img-top" alt="ecommerce backend"></img>

          <h5 className="card-title">e-commerce Back End [repo]</h5>
        </div>
  </a>
  <p></p>

</div>


<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a  href="https://github.com/Edna1999/note-taker.git">
    <div className="card bg-dark text-white" id="work">
    <img src={noteTaker} class="card-img-top" alt="note taker"></img>

          <h5 className="card-title">Note Taker [repo]</h5>
        </div>  
  </a>
  <p></p>

</div>

<div className="paper">
  <div className="pin">
    <div className="shadow"></div>
    <div className="metal"></div>
    <div className="bottom-circle"></div>
  </div>
  <a  href="https://github.com/Edna1999/employee-tracker">
    <div className="card bg-dark text-white" id="work">
    <img src={employeeTracker} class="card-img-top" alt="employee tracker"></img>

          <h5 className="card-title">Employee Tracker [repo]</h5>
        </div>  
  </a>
  <p></p>

</div>
        </div>
    )
}