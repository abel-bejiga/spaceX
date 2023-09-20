import React from "react"
import { Route, Router } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrollY, setScrollY] = React.useState(0)
  const yValue = () => {
    setScrollY(window.scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', yValue)

    return () => window.removeEventListener('scroll', yValue)
  }, [])

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollY={scrollY}/>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Footer menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </>
  )
}

export default App
