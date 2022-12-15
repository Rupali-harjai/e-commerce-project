
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product';
import {  Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
   <>
   
    <Navbar/>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route exact path="/products" element={<Products/>}/>
    <Route exact path="/products/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
    
   </>
  );
}

export default App;
