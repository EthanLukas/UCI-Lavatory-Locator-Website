import React from 'react';

import './App.css';
import NavBar from './parts/Navbar';
import Footer from './parts/Footer';

import Home from "./pages/Home";
import Application from "./pages/Application";
import About from "./pages/About";
import MeetTheTeam from "./pages/MeetTheTeam";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div 
      className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/application' exact element={<Application />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/meettheteam' exact element={<MeetTheTeam />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
