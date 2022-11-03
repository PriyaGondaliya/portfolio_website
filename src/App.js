import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import 'boxicons';
import "./styles/about.scss";
import "./styles/home.scss";
import "./styles/header.scss";
import "./styles/projects.scss";
import "./styles/portfolio.scss";
import "./styles/contact.scss";
import "./styles/skills.scss";
import "./styles/footer.scss";
import "./styles/popup.scss";
import "./App.scss";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
    <Header/>
    <Home/>
    {/* <About/> */}
    <Skills/>
    <Projects/>
    {/* <Portfolio/> */}
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
