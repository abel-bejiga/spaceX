import React from 'react'
import { menuItems, navItems } from '../data/data'
import { Fade as Hamburger } from 'hamburger-react'

const Header = ({ menuOpen, setMenuOpen }) => {

  return (
    <>
      <nav onClick={() => menuOpen ? setMenuOpen(false) : null} className='w-full h-[100px] flex items-center fixed top-0'>
        <ul className='text-white flex items-center absolute left-[40%] h-[100px] -translate-x-1/3 gap-5 w-full max-w-[1400px] m-auto'>
          {navItems.map((items, index) => (
          <li className='first:pr-10 font-bold tracking-tight cursor-pointer uppercase text-sm hover:underline hover:underline-offset-4 anime' key={index}>{items.label}</li>

          ))}
        </ul>
      </nav>
        <ul className='text-white fixed top-[40px] right-24 w-fit flex items-center gap-2 font-bold tracking-tight cursor-pointer uppercase text-sm'>
          <li>Shop</li>
        </ul>
          <li className='text-white fixed z-[1] top-[25px] right-10 w-fit flex items-center gap-2 font-bold tracking-tight cursor-pointer uppercase text-sm'><Hamburger toggled={menuOpen} toggle={setMenuOpen} direction='right' size={15}/></li>
        {menuOpen && (
      <div className={`${menuOpen ? 'slideIn' : 'slideOut'} bg-black w-[350px] fixed h-screen right-0`}>
        <ul className='text-white relative top-20 w-2/3 m-auto'>
          {menuItems.map((items, index) => (
            <li key={index} className='uppercase border-b text-sm border-zinc-700 py-3 text-end'>{items.label}</li>
          ))}
        </ul>
      </div>
      )} 
    </>
  )
}

export default Header