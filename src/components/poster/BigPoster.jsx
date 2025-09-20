import React from 'react'


const BigPoster = () => {
  return (
    <div className='w-full h-[50vh] flex justify-between bg-[#40BFFF] gap-8 p-4 rounded'>
        <div className='h-full w-[50%] flex flex-col justify-center items-start px-10 '>
            <h1 className='text-5xl font-medium text-white'>Adidas Mens Running <br />Sneakers</h1>
            <p className='text-xl text-center text-white'>Performance and design, Token right to the edge</p>
            <button className=' border-b-2 border-white cursor-pointer bg-transparent p-0 font-medium text-white rounded mt-5'>Shop Now</button>
        </div>
        <div className='h-full w-[40%] flex flex-col justify-center items-start px-10  '>
            <img className='w-full h-full object-cover transform -scale-x-100' src="../../public/images/Shoes.png" alt="Adidas running shoes" />
        </div>
    </div>
  )
}

export default BigPoster