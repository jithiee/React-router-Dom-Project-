import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  
    const [data , setData] = useState([])
    
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData = async ()=>{
          const res = await fetch("https://dummyjson.com/products");
          const result = await res.json()    
          setData(result.products)
        }

        fetchData()
    }, [])
   
 
  
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Products List</h1> <hr />

      <div>
          {data.map((product)=>(
            <p>
              
              <p>Product Id : {product.id} </p>
              <p>Product Title : {product.title} </p>
              <p>Product Price : {product.price}</p>
            
              <hr />
            
            </p>
          ))}
      </div>
    </div>
  );
}

export default Products;




