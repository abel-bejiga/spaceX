import React from 'react'
import { pages } from '../data/data'
import Anime from '../components/Anime'
import {LiaAngleDownSolid} from 'react-icons/lia'


const Home = ({ menuOpen, setMenuOpen }) => {

  return (
    <>
        <div onClick={() => menuOpen ? setMenuOpen(false) : null} className='w-full '>
            {pages.map((page, index) => (
                <div key={index}className='h-screen w-full' style={{background: `url(${page.img}) center/cover no-repeat`}}>
                    <div className='w-full h-full max-w-[1400px] m-auto '>
                        <Anime prop={page} menuOpen={menuOpen}/>
                    </div>
                    <p className='bouncingAngle w-fit relative bottom-24 left-1/2 text-white text-4xl'>
                    <LiaAngleDownSolid />
                    </p>
                </div>
            ))}
        </div>
    </>
  )
}

export default Home