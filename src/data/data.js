import Logo from '../components/Logo'
import HeroImg from '../assets/HeroLaunch.jpg'
import Hero2 from '../assets/Hero2_Star6.jpg'
import Hero3 from '../assets/Hero3_Crew_6.jpg'
import HeroEnd from '../assets/HeroEnd_launch.jpg'


export const navItems = [
    {label: Logo() , path: ''},
    {label: 'Falcon 9', path: ''},
    {label: 'Falcon heavy', path: ''},
    {label: 'Dragon', path: ''},
    {label: 'Starship', path: ''},
    {label: 'Human spaceflight', path: ''},
    {label: 'Rideshare', path: ''},
    {label: 'Starshield', path: ''},
    {label: 'Starlink', path: ''},
]

export const menuItems = [
    {label: 'Mission', path: ''},
    {label: 'Launches', path: ''},
    {label: 'Careers', path: ''},
    {label: 'Updates', path: ''},
    {label: 'Shop', path: ''},
]
export const pages = [
    {label: 'Upcoming launch', name: 'starlink mission', img: HeroImg},
    {label: 'Recent launch', name: 'starlink mission', img: Hero2},
    {label: 'Completed mission', name: 'dragon and crew-6 return to earth', img: Hero3},
    {label: 'Starship flight test', img: HeroEnd},
]

export const footer = [
    {label: 'spacex © 2023', path: ''},
    {label: 'Privacy policy', path: ''},
    {label: 'Suppliers', path: ''},

]

