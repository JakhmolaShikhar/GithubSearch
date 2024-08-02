import { useState } from 'react'
import './App.css';
import LandingPage from './components/LandingPage';
import Repository from './components/Repository';
import GetRespositories from './components/subComponents/ListofRepos';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import FileBrowser from './components/FileBrowser';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/respositories" element={<Repository />} />
          <Route path='/repos' element={<GetRespositories />}>
            <Route path='files' element={<FileBrowser />}/>
          </Route>
          
        </Routes>
      
  </Router> 
      {/* <LandingPage />
      <Repository /> */}
    </div>
      
  )
}

export default App