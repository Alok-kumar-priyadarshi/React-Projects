import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/context'
import axios from '../utils/axios'
import Loading from '../components/Loading'
import {  toast } from 'react-toastify';


// import axios, { Axios } from 'axios';

const Details = () => {

  const navigate = useNavigate();

  const [products , setProducts ] = useContext(ProductContext);
  

  const [product , setProduct] = useState(null);

  const {id} = useParams();

  useEffect(() => {

    if(!product){
      setProduct(products.filter(p=>p.id == id)[0])
    }
  }, [products])



  const productDeleteHandler = () => {
    const filteredProducts = products.filter((p) => p.id!==id);
    setProducts(filteredProducts);
    localStorage.setItem("products",JSON.stringify(filteredProducts));
    navigate(-1);
    toast.success('Product deleted sucessfully')
    
  }

  return product?(
    <>

        <div className='container w-[70%] flex h-full mx-auto py-[10%] items-center
        justify-center '>

            <img
            className='mr-5 w-[350px] '
            src={`${product.image}`} alt="" />

            <div className='content '>
                <h1 className='text-5xl mb-5'>{`${product.title}`}</h1>
                <h3 className='text-zinc-500 text-xl mb-2'>{`${product.category}`}</h3>
                <h2 className='text-3xl text-green-500 mb-4'>{`$ ${product.price}`}</h2>
                <p className='text-lg mb-5'>{`${product.description}`}</p>
                <Link to={`/edit/${product.id}`} className=' mt-2 mr-3 px-5 py-3 border rounded border-blue-400 text-blue-400'>Edit</Link>
                <Link onClick={() => productDeleteHandler(product.id)} className=' mt-2 px-5 py-3 border rounded border-red-400 text-red-400'>Delete</Link>

            </div>

        </div>
        


    </>
  ): <Loading />
}

export default Details