import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { RiSearchLine } from "react-icons/ri";
import Carousel from '../components/Carousel';
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
      <header className='flex z-20 w-screen h-24 bg-black bg-opacity-60 items-center fixed'>
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

        <article className='h-screen bg-cover main_article1 text-white font-bold '>
          <div className='text-5xl pt-40 pl-80'>DNS Korea
          <hr className='border-2 border-white w-72 mt-2'/>
          </div>
          <div className='h-full flex justify-evenly mt-12'>
            <div className='flex flex-col items-center mt-10'>
              <img src="https://url.kr/t9hkgw" alt="" />
              <div className='flex flex-col items-center mt-10'>
                <p className='text-4xl mb-5'>Value</p>
                <p className='text-xl'>always think about</p>
                <p className='text-xl'>the quality of the product</p>
              </div>
            </div>
            <div className='flex flex-col items-center mt-10'>
              <img src="https://github.com/asylee02/asylee02.github.io/assets/87488288/5d0c63c5-1db6-41c3-ba58-f591a82aa019" alt="" />
              <div className='flex flex-col items-center mt-10'>
                <p className='text-4xl mb-5'>Innovation</p>
                <p className='text-xl'>always try to</p>
                <p className='text-xl'>improve myself</p>
              </div>
            </div>
            <div className='flex flex-col items-center mt-10'>
              <img src="https://github.com/asylee02/asylee02.github.io/assets/87488288/dbd48c28-7394-4fd7-a84f-457496c5aab5" alt="" />
              <div className='flex flex-col items-center mt-10'>
                <p className='text-4xl mb-5'>Trust</p>
                <p className='text-xl'>always value trust </p>
                <p className='text-xl'>with my customers</p>
              </div>
            </div>
          </div>
        </article>

        <article className='h-screen'>
        <div className='w-1/6 ml-80'>
            <p className='text-3xl font-bold mb-1 pt-24'>Major Product</p>
            <hr className='border-2 border-zinc-700'/>
        </div>
          <Carousel/>
        </article>

        {/* <article className='h-screen '>
          <div className='w-1/6 ml-52'>
            <p className='text-3xl font-bold mb-1 pt-24'>Major Product</p>
            <hr className='border-2 border-zinc-700'/>
          </div>

          {product && 
          <ul className=' w-screen  grid grid-cols-6 gap-x-12 gap-y-5 px-40 mt-16'>
            {product.map((item)=>{
              return <ProductItem data={item}/>
            })}
          </ul>
          }
        </article> */}
      </main>

      <footer></footer>
    </div>
  )
}
