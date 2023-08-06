import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Contact from './components/Contact'
import Cart from './components/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail'


const App = () => {
  
  return (
    <BrowserRouter>
     <NavBar/>

     <Routes> 

     <Route exact path='/' element={<Home />} />
     <Route exact path='/category/:category' element={<ItemListContainer />} />
     <Route exact path='/cart' element={<Cart />} />
     <Route exact path='/contact' element={<Contact />} />
     <Route exact path='/item/:id' element={<ItemDetailContainer />} />
     <Route exact path='/producto/:id' element={<ItemDetail />} />
    

     </Routes>

    </BrowserRouter>
  )
}

export default App