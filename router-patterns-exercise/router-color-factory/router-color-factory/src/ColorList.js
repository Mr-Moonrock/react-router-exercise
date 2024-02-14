import React from 'react';
import {Link} from 'react-router-dom';
import './ColorList.css'

function ColorList() {
  
  return (
    <div>
      <h1> Welcome to the Color Factory </h1>
      <Link to='/color/new'> Add a Color </Link>
      <h3> Please select a color: </h3>
      <ul className='Colorlist-List'>
        <li> <Link to='/color/red'> Red </Link> </li>
        <li> <Link to='/color/blue'> Blue </Link> </li>
        <li> <Link to='/color/green'> Green </Link> </li>
      </ul>
      
    </div>
  )
}

export default ColorList;