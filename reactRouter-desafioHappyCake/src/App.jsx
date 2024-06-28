import React from 'react'
import { Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import { Contacto } from "./views/Contacto";

import { Navbar } from "./components/Navbar";

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
    </>
  )
}

export default App
