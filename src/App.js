import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
