import { useState } from 'react'
import Navbar2 from './components /navbar';
import CodeIcon from './components /Icon';
// import Header from './components /Header'; 
import SignUp from './components /SignUp';
import Landing from './components /Landing';
import Login from "./components /login";
import E from './components /E';
import Home from './components /Home';
import Ecom from './pages/Ecom';
import HB from './pages/HB';
import Retail from "./pages/Retail"
import Tech from "./pages/Tech"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from "./components /Sidebar"; 
import './components /styles.css';
import Header from './components /Header';
// import Header from './components /Header'
 




function App() {


  return (
    <>
    
    
   
   

    
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/ecom" element={<Ecom />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/hb" element={<HB />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
