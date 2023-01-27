import './App.css';
import ListAuthor from './views/ListAuthor/ListAuthor';
import NewAuthor from './views/CreateAuthor/CreateAuthor';
import EditAuthor from './views/EditAuthor/EditAuthor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListAuthor/>}/>
          <Route path='/new' element={<NewAuthor/>}/>          
          <Route path='/edit' element={<EditAuthor/>}/>                    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
