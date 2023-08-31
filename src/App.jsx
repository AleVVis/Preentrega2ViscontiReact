import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from './components/Contact';
import { CartProvider } from './context/CartContext'; // Importa el CartProvider
import Cart from './components/Cart';
import CartWidget from './components/CartWidget';
import SendOrder from './components/SendOrder';

const App = () => {
  return (
    <BrowserRouter>
      {/* Wrap the entire application in CartProvider */}
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Contact />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

