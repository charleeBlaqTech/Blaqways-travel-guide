import React, { Fragment } from "react"
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home  from "./components/Home";
import About from "./components/About";
import ExploreDestinations from "./components/ExploreDestinations";
import Footer from "./components/Footer";





function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/explore" element={<ExploreDestinations/>}/>
      </Routes>
      <Footer/>
    </Fragment>
  );
}

export default App;
