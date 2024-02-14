import React from 'react';
import { useParams } from 'react-router-dom';


function DogDetails({ dogs }) {

  const { name } = useParams();
  const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase() );

  if (!dog) {
    return <div> Dog not found </div>;
  }

  const handleGoBack = () => {
    window.history.back();
  }

  return (
    <div>
      <h2> {dog.name} </h2>
      <img src={dog.src} />
      <p> Age: {dog.age} </p>
      <ul>
        {dog.facts.map((fact, index ) => (
          <li key={index}> {fact} </li>
        ))}
      </ul>
      <button onClick={handleGoBack}> Go Back </button>
    </div>
  )
}

export default DogDetails;