import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Hospedagens from './pages/hospedagens/Hospedagens'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
