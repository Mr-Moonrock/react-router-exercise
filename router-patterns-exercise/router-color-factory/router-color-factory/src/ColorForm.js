import React, {useState} from 'react';

function ColorForm() {
  const [newColor, setNewColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBackgroundColor(newColor);
  }

  return (
    <div> 
      <style> {`body {background-color: ${backgroundColor}; }`} </style>
      <h2> Add New Color </h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter color'
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        <button type='submit'> Add Color </button>
      </form>
    </div>
  )
}

export default ColorForm;