import React from 'react';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';



const App = () => {
  return (
    <div>
      <Navbar/> 

       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} /> 
          <Route path='/contact' element={<Contact/>} /> 
          <Route  path='/products' element={<Products/> } />
          <Route path='*' element={<NotFound/>}  />
          
       </Routes>
   
    </div>
  );
}

export default App;

