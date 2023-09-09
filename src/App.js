import './App.css';
import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = ()=>{
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/general" element={<News pageSize={9} country="in" category="general" />} />
            <Route path="/business" element={<News pageSize={9} country="in" category="business" />} />
            <Route path="/entertainment" element={<News pageSize={9} country="in" category="entertainment" />} />
            <Route path="/health" element={<News pageSize={9} country="in" category="health" />} />
            <Route path="/science" element={<News pageSize={9} country="in" category="science" />} />
            <Route path="/sports" element={<News pageSize={9} country="in" category="sports" />} />
            <Route path="/technology" element={<News pageSize={9} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }

  export default App

