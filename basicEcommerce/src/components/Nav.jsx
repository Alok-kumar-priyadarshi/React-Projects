import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../utils/context'
import { Link } from 'react-router-dom'

const Nav = () => {

    const [products] = useContext(ProductContext)

    let distinct_category = products && products.reduce((acc,cv) => [...acc,cv.category],[])

    distinct_category = [...new Set(distinct_category)];

    const color = () => {
        return `rgba(${(Math.random()*255).toFixed()} , ${(Math.random()*255).toFixed()} , ${(Math.random()*255).toFixed()} , 0.7)`
    }

    // console.log(color());



  return (

    <>
    
        <nav className='w-[15%] h-screen bg-zinc-100 flex flex-col items-center pt-5'>
            <a className='py-3 px-5 border rounded border-blue-400 text-blue-500' href="/create">Add New Product</a>

            <hr className='my-3 w-[80%]'/>

            <h1 className='text-2xl w-[80%] mb-3'>Category Filter</h1>

            <div className='w-[80%] '>

                {distinct_category.map((c,i) => (
                    <Link
                    key={i} to={`/?category=${c}`} className='flex items-center mb-3  '>
                        <span
                        style={{backgroundColor : color()}}
                        className='rounded-full w-[15px] h-[15px] mr-2 bg-blue-300'></span>
                            {c}
                    </Link>
                ))}
                
            </div>

        </nav>

    </>

    
  )
}

export default Nav