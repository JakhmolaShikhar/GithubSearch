import { useState } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import Repository from './components/Repository';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/respositories/:username" element={<Repository />} />
          
        </Routes>
      
  </Router> 
      {/* <LandingPage />
      <Repository /> */}
    </div>
      
  )
}

export default App
