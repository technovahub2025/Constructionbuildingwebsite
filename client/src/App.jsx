import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Buildingestimate from "./pages/Buildingestimate";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import ProjectVideos from "./pages/ProjectVideos";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className=" bg-white">
      <BrowserRouter>
      
      
      <Navbar />
      <Routes>

            <Route path="/" element={<Home />} />
         <Route path="/Buildingestimate" element={<Buildingestimate />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/about" element={<About/>} />
          <Route path="/videos" element={<ProjectVideos/>} />
          <Route path="/contact" element={<Contact/>} />

       

      </Routes>
       
      

     
      <Footer/>
      
      
      
       </BrowserRouter>

    </div>
  );
};

export default App;
