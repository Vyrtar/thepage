import React from 'react';
import logo from './logo.svg';
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
          <Route path="/home" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes >
  </BrowserRouter>
  </div>
  );
}

export default App;
