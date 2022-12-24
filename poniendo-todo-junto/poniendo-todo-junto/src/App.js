import './App.css';
import CardPersona from './components/CardPersona';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <CardPersona
          name="Doe, Jane"
          hairColor="Black"
          friendlyName = "Jane Doe"
          defaultAge = "45"
        />


        <CardPersona
          name="Smith, John"
          hairColor="Brown"
          friendlyName = "John Smith"          
          defaultAge = "88"          
        />
      </header>
    </div>
  );
}

export default App;
