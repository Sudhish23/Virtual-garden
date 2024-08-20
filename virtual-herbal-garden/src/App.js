import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import HerbalGarden from './components/HerbalGarden';
import AyurvedaHistory from './components/AyurvedaHistory';
import ChatbotPage from './components/ChatbotPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/herbal-garden" element={<HerbalGarden />} />
        <Route path="/ayurveda-history" element={<AyurvedaHistory />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
