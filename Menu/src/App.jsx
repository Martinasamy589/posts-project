import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './Pages/Menu'
import { Home } from './Pages/Home'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
