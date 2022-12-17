import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home.component';
import About from './Routes/About/About.component';
import Archive from './Routes/Archive/Archive.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  );
}

export default App;
