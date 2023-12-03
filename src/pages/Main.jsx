import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { RiSearchLine } from "react-icons/ri";
import ProductItem from '../components/ProductItem';

export default function Main() {
  const [product, setProduct] = useState();
  useEffect(()=>{
    fetch('./data/Products.json')
    .then((res)=>res.json())
    .then((res)=>setProduct(res.items))
  },[])

  product && console.log(product)

  return (
    <div>
      <header className='flex w-screen h-24 bg-black bg-opacity-60 items-center fixed'>
          <div className='w-28 z-20 ml-72'>
          {/* https://url.kr/sje5t7  까만거 */}
          {/* https://url.kr/c81l4s  하얀거 */} 
            <img src="https://url.kr/c81l4s" alt="" />
          </div>
          <nav className='w-1/3'>
              <ul className='flex text-white font-bold text-lg justify-evenly mr-48'>
                  <li className='hover:text-stone-500 hover:underline cursor-pointer '>ABOUT US</li>
                  <li className='hover:text-stone-500 hover:underline cursor-pointer '>PRODUCT</li>
                  <li className='hover:text-stone-500 hover:underline cursor-pointer '>CONTACT</li>
              </ul>
          </nav>
          <form action="" className='h-9 w-1/6 relative ml-96'>
            <input type="text" placeholder='Search' className='h-9 w-full rounded-full bg-white opacity-70 flex items-center pl-5 justify-between pr-3'/>
            <button><RiSearchLine className='text-3xl absolute left-3/4 top-1 ml-8'/></button>
          </form>
        </header>
      <main>
        <article className='h-screen bg-cover main_article1 text-white text-7xl font-bold flex flex-col-reverse justify-center items-center '>
          <div className='w-screen flex justify-center text-9xl'>DNS Korea</div>
          <div className='mb-56 flex justify-evenly w-screen mx-36'>
            <p>Value</p>
            <p>Innovation</p>
            <p>Trust</p>
            <p>Customer</p>
          </div>
          
        </article>
        <article className='h-4/5 '>
          <div className='w-1/6 ml-52 pt-24'>
            <p className='text-3xl font-bold mb-1'>Major Product</p>
            <hr className='border-2 border-zinc-700'/>
          </div>

          {product && 
          <ul className='h-4/5 w-screen  grid grid-cols-4 gap-x-12 gap-y-5 px-40'>
            {product.map((item)=>{
              return <ProductItem data={item}/>
            })}
          </ul>
          }
        </article>
      </main>

      <footer></footer>
    </div>
  )
}
