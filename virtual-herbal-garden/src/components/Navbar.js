import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/herbal-garden">Herbal Garden</Link></li>
        <li><Link to="/ayurveda-history">Ayurveda History</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
