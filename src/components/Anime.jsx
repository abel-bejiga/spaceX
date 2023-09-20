import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {Reveal} from 'react-reveal'

const Anime = ({ prop, menuOpen }) => {

    const [winSize, setWinSize] = React.useState(0)
    const [discRef, discInview] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })
    const winWidth = () => {
        setWinSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', winWidth)

        return () => window.removeEventListener('resize', winWidth)
    }, [])

  return (
                <div ref={discRef} className={`${menuOpen && winSize < 600 ? 'fadeOut' : 'fadeIn'} w-1/2 max-w-[520px] text-white relative xl:top-[65%] top-[75%] xl:left-[50px] left-5`}>
             <Reveal bottom cascade when={discInview}>
                    <p className='xl:text-xl text-base uppercase pb-1'>{prop.label}</p>
                    <p className='xl:text-[45px] text-3xl max-xl:whitespace-nowrap font-bold xl:leading-[45px] leading-8 uppercase'>{prop.name} <p>{prop.name2}</p></p>

                    <p className='uppercase border-[3px] w-fit py-3 px-6 font-bold text-[14px] hoverEff anime xl:mt-[30px] mt-4'>learn more</p>
            </Reveal>
                 
                </div>
        )
    }


export default Anime