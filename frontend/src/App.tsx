import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './views/Home/Home';
import ItemDetail from './views/ItemDetail/ItemDetail';

import Navbar from './components/Navbar/Navbar';

import './App.scss';
import Cart from './views/Cart/Cart';
import Chat from './components/Chat/Chat';


function App() {
  const [chatOpen, setChatOpen] = useState<Boolean>(true)

  return (
    <BrowserRouter>
      <Navbar />
      {chatOpen && <Chat onClose={() => setChatOpen(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
