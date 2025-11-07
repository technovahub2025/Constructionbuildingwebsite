import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Buildingestimate from "./pages/Buildingestimate";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div className=" bg-white  md:px-10 ">
      <BrowserRouter>
      
      
      <Navbar />
      <Routes>

            <Route path="/" element={<Home />} />
         <Route path="/Buildingestimate" element={<Buildingestimate />} />
          <Route path="/Pricing" element={<Pricing />} />
       

      </Routes>
       
      

     
      <Footer/>
      
      
      
       </BrowserRouter>

    </div>
  );
};

export default App;
