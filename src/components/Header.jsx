import React from 'react'
import { menuItems, mobileMenu, navItems } from '../data/data'
import { Fade as Hamburger } from 'hamburger-react'
import { useInView } from 'react-intersection-observer'
import {Reveal, Zoom} from 'react-reveal'





const Header = ({ menuOpen, setMenuOpen, scrollY }) => {
  const [menuScrolled, setMenuScrolled] = React.useState(false)
  const [menuRef, menuInview] = useInView({
    triggerOnce: true,
    threshold: 0.5
})

  window.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
      setMenuScrolled(true)
      setMenuOpen(false)
    } else {
      setMenuScrolled(false)
      setMenuOpen(false)
    }
  })

  console.log()
  return (
    <div className={scrollY >= 250 && !menuScrolled ? 'fadeOut' : 'fadeIn'}>
      <nav onClick={() => menuOpen ? setMenuOpen(false) : null} className={`max-xl:hidden w-full h-[100px] flex items-center fixed top-0`} >
        <div className={`${menuScrolled && scrollY >= 250 ? 'blackBg-down' : 'blackBg-up'} fixed top-0 w-full bg-black `}></div>
        <ul className=' text-white flex items-center absolute left-[40%] h-[100px] -translate-x-1/3 gap-5 w-full max-w-[1400px] m-auto'>
          {navItems.map((items, index) => (
          <li className='first:pr-10 font-bold tracking-tight cursor-pointer uppercase text-sm hover:underline hover:underline-offset-4 anime' key={index}>{items.label}</li>
          ))}
        </ul>
      </nav>
      <nav onClick={() => menuOpen ? setMenuOpen(false) : null} className={`xl:hidden w-full h-[50px] flex justify-center items-center fixed top-0`} >
      <div className={`${menuScrolled && scrollY >= 250 ? 'blackBgSM-down' : 'blackBgSM-up'} fixed top-0 w-full bg-black `}></div>
      <ul className='relative'>
            {navItems[0].label}
        </ul>
      </nav>
        <ul className='max-xl:hidden text-white fixed top-[40px] right-24 w-fit flex items-center gap-2 font-bold tracking-tight cursor-pointer uppercase text-sm'>
          <li>Shop</li>
        </ul>
          <li className='text-white fixed z-[1] xl:top-[25px] top-[2px] xl:right-10 right-3 w-fit flex items-center gap-2 font-bold tracking-tight cursor-pointer uppercase text-sm'><Hamburger toggled={menuOpen} toggle={setMenuOpen} direction='right' size={15}/></li>
        {menuOpen && (
      <div ref={menuRef} className={`${menuOpen ? 'slideIn' : 'slideOut'} bg-black xl:w-[350px] w-[290px] fixed top-0 h-screen right-0`}>
         <Reveal top cascade when={menuInview}>
        <ul className='max-xl:hidden text-white relative top-20 w-2/3 m-auto'>
         {menuItems.map((items, index) => (
            <li key={index} className='uppercase border-b text-sm border-zinc-700 py-3 text-end cursor-pointer hover:text-zinc-400 anime'>{items.label}</li>
          ))}
        </ul>
        <ul className='xl:hidden text-white relative xl:top-20 top-10 w-2/3 m-auto max-xl:left-5'>
         {mobileMenu.map((items, index) => (
            <li key={index} className='uppercase border-b text-sm border-zinc-700 py-3 text-end cursor-pointer hover:text-zinc-400 anime'>{items.label}</li>
          ))}
        </ul>
         </Reveal>
      </div>
      )} 
    </div>
  )
}

export default Header