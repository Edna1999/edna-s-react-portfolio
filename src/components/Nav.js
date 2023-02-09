import React from 'react';
import '../styles/style.css';


export default function Nav({ currentPage, handlePageChange }) {
return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
       Edna Omadjambe
    </li>
    <li className="nav-item">
        <a id='aboutMe' href="#about"
        onClick={() => handlePageChange('About')}
        className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}>About Me</a>
    </li>
    <li className="nav-item">
        <a id='portfolio' href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
        className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}>Projects</a>
    </li>
    <li className="nav-item">
        <a id='resume' href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>Resume</a>
    </li>
    </ul>
)
}