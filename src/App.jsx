import { Route, Router } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {


  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
