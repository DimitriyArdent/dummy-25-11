// HelloComponent.js
// HelloComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const HelloComponent2 = () => {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    // Send a request to the server when the button is clicked
    axios.get('http://localhost:3001/hello')
      .then(response => setMessage(response.data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
  

 
      <h1>Hello Component ( •̀ᴗ•́ )و ̑̑  </h1>
      <div>( •̀ᴗ•́ )و</div>
      <div>( •̀ᴗ•́ )و</div>
      <div>( •̀ᴗ•́ )و</div>
      <div>( •̀ᴗ•́ )و</div>
      <div>( •̀ᴗ•́ )و</div>
      <div>Hera are some changes</div>
 
        <h1>Hello Component ( •̀ᴗ•́ )و ̑̑  </h1>
       <div>Hera are some changes</div>
 
      <button onClick={fetchData}>Fetch Message</button>
      <button>button to be merged</button>
      <p>Message from the server: {message}</p>
    </div>
  );
};

export default HelloComponent2;
