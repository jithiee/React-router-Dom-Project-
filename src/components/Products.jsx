import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  
    const [data , setData] = useState([])
    const [inputData , setInputData] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchData = async ()=>{
          const res = await fetch("https://dummyjson.com/products");
          const result = await res.json()    
          setData(result.products)
        }

        fetchData()
    }, [])
   
 const handleChnage =(e)=>{
      setInputData(e.target.value)
 }
  const seatchData = data.filter((item)=> item.title.toLowerCase().includes(inputData))

  

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Products List</h1> <hr />

      <input type="search" value={inputData} onChange={handleChnage}/>

      <div>
          {seatchData.map((product)=>(
            <p>
              
              <p>Product Id : {product.id} </p>
              <p>Product Title : {product.title} </p>
              <p>Product Price : {product.price}</p>
              <button onClick={()=> navigate(`${product.id}`)} >show details</button>
              <hr />
            
            </p>
          ))}
      </div>
    </div>
  );
}

export default Products;




