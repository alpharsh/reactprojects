import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> Will not use this cause of router, if use we've to import Outlet from react router DOM*/}
    </>
  )
}

export default App
