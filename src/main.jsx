import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import Card from './component/Card.jsx'
import Slider from './component/Slider.jsx'
import StoreApi from './component/StoreApi.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Slider/>
    <StoreApi/>
    <App />
    {/* <Card/> */}
    <Footer/>
  </>

)
