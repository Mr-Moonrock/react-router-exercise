import React from 'react';
import Nav from './Nav';


// const DogList = ({defaultProps}) => {
const DogList = ({ dogs }) => {

  return (
    <div>
      <h1> Dog List </h1>
      <Nav dogs={dogs} />
    </div>
  )
};

export default DogList;
