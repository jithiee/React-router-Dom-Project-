import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const listItems = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <div>
      {/* Link  */}
      {/* <div style={{display:'flex' , justifyContent:'space-between' , padding:'20px' , backgroundColor:'green' , }}>
     
           <p style={{color:'white'}}>Logo</p>
       <ul style={{display:'flex' , gap:'80px' , listStyle:'none' , color:'white' , cursor:'pointer'}}>
            <li ><Link to="/" style={listItems} >Home</Link></li>
            <li><Link to="/about"  style={listItems}>About</Link>  </li> 
            <li><Link to="/contact" style={listItems}>Contact</Link> </li>
       </ul> 
     </div> */}


      {/* NavLink  */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'green', }}>

        <p style={{ color: 'white' }}>Logo</p>

        <ul style={{ display: 'flex', gap: '80px', listStyle: 'none', color: 'white', cursor: 'pointer' }}>
         
          <li ><NavLink to="/" style={({ isActive }) => ({
            color: isActive ? 'red' : 'white',
            textDecoration: 'none'
          })} > Home </NavLink></li>

          <li><NavLink to="/about" style={({ isActive }) => ({
            color: isActive ? 'red' : 'white' ,
            textDecoration :'none',
          })}>About</NavLink>  </li>

          <li><NavLink to="/products" style={({ isActive }) => ({
            color: isActive ? 'red' : 'white',
            textDecoration: 'none'
          })}  >Products</NavLink> </li>

             <li><NavLink to="/contact" style={({ isActive }) => ({
            color: isActive ? 'red' : 'white',
            textDecoration: 'none'
          })}  >Contact</NavLink> </li>


        </ul>
      </div>

    </div>
  );
}

export default Navbar;
