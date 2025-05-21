import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/context';
import { nanoid } from 'nanoid';
import { useNavigate, useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';



const Edit = () => {

    const [products , setProducts ] = useContext(ProductContext);
    const navigate = useNavigate();
    const {id } = useParams();
    
    const [title , setTitle] = useState("");
    const [image , setImage] = useState("");
    const [category , setCategory] = useState("");
    const [price , setPrice] = useState("");
    const [description , setDescription] = useState("");
    
    const [product, setproduct] = useState({
        title : "",
        image : "",
        category : "",
        price : "",
        description : "",
    });

    const changeHandler = (e) => {

      setproduct({...product , [e.target.name] : e.target.value})

    }


    useEffect(() => {

      setproduct(products.filter((p) => p.id ==id)[0]);

    }, [id])
    

    const Addproducthandler = (e) => {
    e.preventDefault();

    if(product.title.trim().length < 5 || product.image.trim().length<5 || product.category.trim().length<3 || product.price.trim().length<0 || product.description.trim().length<5  ){
        alert("Form must be completely filled !");
        return;
    }



    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products]
    copyData[pi] = {...products[pi] , ...product};


   
    setProducts(copyData);
    navigate("/");
    toast.success('Product edited sucessfully');
    
    localStorage.setItem("products" , JSON.stringify([...products , product]))
    }


  return (
    <form onSubmit={Addproducthandler} className='flex flex-col items-center p-[5%] h-screen w-screen '>


      <h1 className='mb-5 w-1/2 text-3xl  '>Edit Product</h1>

      <input type="url" name='image' placeholder='Image Link' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 ' onChange={changeHandler} value={product && product.image} />

      <input type="text" name='title' placeholder='Title' className='text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3 ' onChange={changeHandler} value={product && product.title} />

      <div className="w-1/2 flex justify-between">
      
        <input type="text" name='category' placeholder='Category' className='text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3 ' onChange={changeHandler} value={product && product.category} />

        <input type="number" name='price' placeholder='Price' className='text-2xl bg-zinc-100 rounded p-3 w-[50%] mb-3 ' onChange={changeHandler} value={product && product.price} />
      
      </div>

      <textarea
      className='text-2xl bg-zinc-100 rounded p-3 w-[50%] mb-3 ' name='description' rows={5}
      onChange={changeHandler}
      
      value={product && product.description} placeholder='Enter your product description here ....' ></textarea>

      <div className='w-1/2'>
        <button className='py-3 px-5 border rounded border-blue-400 text-blue-500' href="/create">Save changes</button>
      </div>




    </form>
  )
}

export default Edit