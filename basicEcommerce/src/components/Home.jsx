import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {

  const [products] = useContext(ProductContext);

  const {search} = useLocation();
  const category = decodeURIComponent( search.split("=")[1] )


  const [filterdProducts, setFilteredProducts] = useState(null)

  const getproductscategory = async () => {
    try {
      const {data} = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);

      
    } catch (error) {

      console.log(error);
      
    }
  }

  useEffect(() => {

    if(!filterdProducts || category=== "undefined") 
      setFilteredProducts(products);
    if(category != "undefined"){

      // getproductscategory();
      setFilteredProducts(products.filter(p => p.category == category))

    } 

  }, [category,products])
  // category,products

  





  return products ? (
    <>

        <Nav/>
    

        <div className=" h-full w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto ">

          {filterdProducts && filterdProducts.map((p , i) => (

            <Link key={p.id} to={`/detail/${p.id}`} className="card mr-3 mb-3 p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
              <div className='images mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-110 '
              style={{backgroundImage:`url(${p.image})`}}>
              </div>
              <h1>{`${p.title}`}</h1>
          </Link>

          )) }

          





        </div>

    </>
    
  ) : <Loading />
}

export default Home