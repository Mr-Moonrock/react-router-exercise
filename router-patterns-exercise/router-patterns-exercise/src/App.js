import React from 'react';
import defaultProps from './defaultProps';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav dogs={defaultProps.dogs} /> */}
        <Routes>
          <Route 
            path="/dogs" 
            element={<DogList dogs={defaultProps.dogs} /> }
          />
          <Route 
            path="/dogs/:name" 
            element={<DogDetails dogs={defaultProps.dogs} />} 
          />
          <Route path='*' element={<Navigate to='/dogs' /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
