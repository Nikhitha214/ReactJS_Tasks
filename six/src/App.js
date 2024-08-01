import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter ,Routes , Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Movie from "./Components/Movie";



const App = () => {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/movie" element={<Movie />}/>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
