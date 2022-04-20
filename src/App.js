import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Estate from './components/pages/Estate';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/estate" element={<Estate/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
