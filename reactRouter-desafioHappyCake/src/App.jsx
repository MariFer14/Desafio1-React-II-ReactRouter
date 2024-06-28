import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Contacto from "./views/Contacto";

import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
