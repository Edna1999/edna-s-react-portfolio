import React from 'react';
import '../../styles/style.css';


export default function Resume() {
return(
    <div className='resume-container'>
        <p className='resMes'>Download my <a className='resMes' href={require("../../assets/Resume copy.pdf")} 
        download='resume'>resume</a></p>

        <div className='list-container'>
        <h2 className='resume-head'>Front-end Proficiencies</h2>
        <ul>
            <li className='resume-list'>HTML</li>
            <li className='resume-list'>CSS</li>
            <li className='resume-list'>JavaScript</li>
            <li className='resume-list'>jQuery</li>
            <li className='resume-list'>React</li>
            <li className='resume-list'>Bootstrap</li>
        </ul>

        <h2 className='resume-head'>Back-end Proficiencies</h2>
        <ul>
            <li className='resume-list'>APIs</li>
            <li className='resume-list'>Node</li>
            <li className='resume-list'>Express</li>
            <li className='resume-list'>MYSQL/Sequelize</li>
            <li className='resume-list'>MongoDB/Mongoose</li>
            <li className='resume-list'>GraphQL</li>

        </ul>

        </div>
       
    </div>
)
}