import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Home from "./Javachef/Home/Home";
import About from "./Javachef/About/About";
import Contact from "./Javachef/Contact/contact";


import Signup from "./Javachef/Sinup/sinup";
import Signin from "./Javachef/signin/signin";
import "./index.css";
import Navbar from "./Javachef/navbar";
import Footer from "./Javachef/Footer";

function App() {
  return (
    <>
  
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer/>

    </BrowserRouter>
    
    </>
  );
}

export default App;
