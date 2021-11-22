import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './views/Home/Home';
import ItemDetail from './views/ItemDetail/ItemDetail';

import Navbar from './components/Navbar/Navbar';

import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
