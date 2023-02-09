import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage]
     = useState('About');

  // changes page depending on the value of currentPage  
    const renderPage = () => {
       if(currentPage === 'About') {
        return <About />;
       }
       if(currentPage === 'Portfolio') {
        return <Portfolio />;
       }
       if(currentPage === 'Resume') {
        return <Resume />;
       }
       
    };

    //sets current page
  const handlePageChange = (page) => setCurrentPage(page);

  
   return (
    <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}

        <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      
    </div>
   );

}
