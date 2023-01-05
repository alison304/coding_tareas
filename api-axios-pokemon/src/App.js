import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState([ ]);
  return (
    <div className="App">
      <button className='btn-poke' onClick={() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0').then(response=>{
          setResponseData(response.data.results)
        })
        }}
      >Fetch Pokemon</button>
      <ul>
        {responseData.map( item => 
          <li key={item.name}>{item.name}</li>
        )}
      </ul>

    </div>
  );
}

export default App;
