import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import People from './pages/People/People';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<People />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
