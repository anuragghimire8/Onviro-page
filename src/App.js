import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Services from './Pages/Services'
import Products from './Pages/Products'
import WebHosting from './Pages/WebHosting'
import Projects from './Pages/Projects'
import ContactUs from './Pages/ContactUs'
import Layout from './Components/Layout'

const App = () => {
  return (
  <div>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<>
    <Layout>
    <Home/>
    </Layout>
    </>}/>
  <Route path="/about-us" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/web-hosting" element={<WebHosting/>}/>
 
  <Route path="/contact-us" element={<ContactUs/>}/>
  
  </Routes>
  </BrowserRouter>
 

  </div>
  )
}

export default App
