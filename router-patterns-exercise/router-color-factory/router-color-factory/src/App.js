import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorList from './ColorList';
import ColorForm from './ColorForm';
import Color from './Color';

function App() {
  const handleColorSubmit = (newColor) => {
    window.history.href = `/colors/${newColor}`;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            exact path='/color' 
            element={<ColorList />} 
          />
          <Route 
            path='/color/new' 
            element={<ColorForm onColorSubmit={handleColorSubmit} /> } 
          />
          <Route 
            path='/color/:color' 
            element={<Color />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
