import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Skills from "./skills";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const main = () => {
    return(
        // <div className="bg-indigo-600">
        <div className="bg-gray-300">
            <Nav/>
            <Hero/>
            <Project/>
            <Skills/>
            <Footer/>
        </div>
    )
}

export default main