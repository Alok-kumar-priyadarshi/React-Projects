import React, { useContext, useState } from 'react'
import { ProductContext } from '../utils/context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';



const create = () => {

  const navigate = useNavigate();
  const [products , setProducts ] = useContext(ProductContext);

  const [title , setTitle] = useState("");
  const [image , setImage] = useState("");
  const [category , setCategory] = useState("");
  const [price , setPrice] = useState("");
  const [description , setdescription] = useState("");

  const Addproducthandler = (e) => {
    e.preventDefault();

    if(title.trim().length < 5 || image.trim().length<5 || category.trim().length<3 || price.trim().length<0 || description.trim().length<5  ){
      alert("Form must be completely filled !");
      return;
    }


    const product = {
      id:nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products , product]);
    navigate("/")
    toast.success('Product Added sucessfully')
    localStorage.setItem("products" , JSON.stringify([...products , product]))

    // console.log(products)

  }





  return (
    <form onSubmit={Addproducthandler} className='flex flex-col items-center p-[5%] h-screen w-screen '>

      <h1 className='mb-5 w-1/2 text-3xl  '>Add New Product</h1>

      <input type="url" placeholder='Image Link' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 ' onChange={(e) => {setImage(e.target.value)}} value={image} />

      <input type="text" placeholder='Title' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 ' onChange={(e) => {setTitle(e.target.value)}} value={title} />

      <div className="w-1/2 flex justify-between">
      
        <input type="text" placeholder='Category' className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3 ' onChange={(e) => {setCategory(e.target.value)}} value={category} />

        <input type="number" placeholder='Price' className='text-2xl bg-zinc-100 rounded p-3 w-[50%] mb-3 ' onChange={(e) => {setPrice(e.target.value)}} value={price} />
      
      </div>

      <textarea
      className='text-2xl bg-zinc-100 rounded p-3 w-[50%] mb-3 ' rows={5}
      onChange={(e) => {setdescription(e.target.value)}}
      
      value={description} placeholder='Enter your product description here ....' ></textarea>

      <div className='w-1/2'>
        <button className='py-3 px-5 border rounded border-blue-400 text-blue-500' href="/create">Add New Product</button>
      </div>




    </form>
  )
}

export default create