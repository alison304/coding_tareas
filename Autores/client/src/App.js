import { Routes, Route } from 'react-router-dom';
import AuthorForm from './views/AuthorForm/AuthorForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path='/' element={<AuthorForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
