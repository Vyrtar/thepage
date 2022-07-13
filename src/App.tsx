import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Videos from './pages/videos';
import Blogs from './pages/blogs';
 
function App() {
  return (
    <div className="flex">
    <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Fotos" element={<Home />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Blogs" element={<Blogs />} />
        </Routes >
  </BrowserRouter>
  </div>
  );
}

export default App;
