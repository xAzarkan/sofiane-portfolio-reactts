import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/atoms/Navbar/Navbar.tsx";
import Home from "./components/molecules/Home/Home.tsx";
import About from "./components/molecules/About/About.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/*
        <componentwrapper anchor={"#ee"} name={"about"} subtilte={"dd"}>

        </componentwrapper>
        */}
    </>
  );
}

export default App;
