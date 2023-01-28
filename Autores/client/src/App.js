import './App.css';
import AuthorList from './views/AuthorList/AuthorList';
import AuthorForm from './views/AuthorForm/AuthorForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthorList/>}/>
          <Route path='/new' element={<AuthorForm/>}/>          
          <Route path='/edit/:id' element={<AuthorForm/>}/>                    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
