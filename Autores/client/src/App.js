import './App.css';
import AuthorForm from './views/AuthorForm/AuthorForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthorForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
