import React from "react"
import { Route, Router } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Footer menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </>
  )
}

export default App
