import React from 'react'
import { pages } from '../data/data'


const Home = () => {
  return (
    <>
        <div className='w-full '>
            {pages.map((page, index) => (
                <div key={index} className='h-screen w-full' style={{background: `url(${page.img}) center/cover no-repeat`}}>
                    <div className='w-full h-full max-w-[1400px] m-auto '>
                        <div className='w-1/2 max-w-[520px] text-white relative top-3/4 left-[50px]'>
                            <p className='text-xl uppercase'>{page.label}</p>
                            <p className='text-5xl font-bold uppercase'>{page.name}</p>
                            <p className='uppercase border w-fit py-3 px-6  font-bold text-[14px] hover:bg-white hover:text-black anime mt-[30px]'>learn more</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Home