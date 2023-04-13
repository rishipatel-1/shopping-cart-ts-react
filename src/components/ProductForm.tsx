import { title } from 'process';
import React, { ChangeEvent, FC, useState } from 'react'
import Product from "../slice/ProductSlice"



const ProductForm:FC = () => {
const [{title,price,id},setAdd] = useState({
    title:"",
    price:0,
    id:""
})
const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setAdd(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(setAdd);
    
    
    
  };

  const handleSubmit = ()=>{
console.log(setAdd);

  }
  
  return (
    <>
    <h2>Add New Product</h2>

    <hr/>
    <br/>
    <input type="text" placeholder='Title' onChange={(e)=>handleChange(e)} value={title} name="title"/>
    <input type="number" placeholder='Price' onChange={(e)=>handleChange(e)} value={price} name="price"/>
    <input type="number" placeholder='Id'onChange={(e)=>handleChange(e)} value={id} name="id"/>
    <br/>
    <button onClick={handleSubmit}>add</button>

    </>
  )
}

export default ProductForm;