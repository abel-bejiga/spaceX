import React from 'react'
import { footer } from '../data/data'

const Footer = () => {
  return (
      <>
        <footer className='relative bg-black text-white'>
          <div className='relative w-full inline-flex justify-center py-[30px]'>
          {footer.map((items, index) => (
            <p key={index} className='first:font-normal mx-[20px] uppercase text-[11px] font-bold'>{items.label}</p>
          ))}
          </div>
        </footer>

      </>
    )
}

export default Footer