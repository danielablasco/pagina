import React from 'react';
import './Footer.css';
    
    const Footer = () => {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      return (
        <footer className="footer">
          <div>
            <ul>
              
             
              <li>Contacto:</li>
              <p>Teléfono: 381-5496179</p>
              <p>Teléfono: 381-6482306</p>
              <p>Email: misscherry@gmail.com</p>
           
            </ul>
          </div>
          
          <div className="scroll-to-top" onClick={scrollToTop}></div>

          <div>
            <p>Todos los derechos reservados &copy; 2023</p>
          </div>
        </footer>
      );
    };
    
    export default Footer;
