import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    
    const [product , setProduct] = useState([])
     const {id} = useParams()

    useEffect(()=>{
          const fetchProduct = async ()=>{
              const res = await  fetch(`https://dummyjson.com/products/${id}`)
              const result = await res.json()
              setProduct(result)
          }
       
          fetchProduct()
    },[id])
  
    // console.log(product.title);
    

  return (
    <div>
      <h1>Product Details</h1> <hr />
      <img src={product.images} alt=""  width={200}/>
        <h3>product id : {id}</h3>
        <p>Title : {product.title}</p>
        <p>Category : {product.category}</p>
        <p>rating : {product.rating}</p>
        <hr />

    </div>
  );
}

export default ProductDetails;


