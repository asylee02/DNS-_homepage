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
      <header className='flex w-screen h-24 bg-black bg-opacity-60 items-center justify-evenly fixed'>
          <div className='w-40 h-12 bg-slate-600'></div>
          <nav className='w-1/3'>
              <ul className='flex text-white font-bold text-xl justify-evenly'>
                  <li>회사소개</li>
                  <li>제품</li>
                  <li>문의사항</li>
              </ul>
          </nav>
          <form action="" className='h-9 w-1/6 relative'>
            <input type="text" placeholder='Search' className='h-9 w-full rounded-full bg-white opacity-70 flex items-center pl-5 justify-between pr-3'/>
            <button><RiSearchLine className='text-3xl absolute left-3/4 top-1 ml-8'/></button>
          </form>
        </header>
      <main>
        <article className='h-screen bg-cover main_article1'>
          
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
