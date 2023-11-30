import React from 'react'

export default function ProductItem({data}) {
  return (
    <div className= ' h-full w-9/12 object-contain flex flex-col items-center justify-center ml-10'>
    <div className="relative w-full h-5/6">
      <img src={data.url} alt="" className='h-full object-cover' />
      <div className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-80 pl-4 pt-4">
        <p className="text-white text-xl font-bold">{data.content_title}</p>
        <hr className='border-white w-2/3 mb-3'/>
        {data.content.map((item, index)=>{
            return <li className='text-white mb-2'>{index+1}. {item}</li>
        })}
      </div>
    </div>
      <div className='text-2xl font-semibold'>{data.name}</div>
    </div>
  )
}
