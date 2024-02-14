import React from 'react';
import { useParams, Link } from 'react-router-dom';


function Color() {
  const { color } = useParams();

  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <h2>{color}</h2>
      <Link to='/color'>
        <button> Go Back </button>
      </Link>
    </div>
  );
}

export default Color;