import Nav from "./nav";
import Hero from "./hero";
import Project from "./project";
import Skills from "./skills";
import Footer from "./footer";
import  BackToTopButton  from "./backToTopButton";
import { BsFillArrowUpSquareFill } from "react-icons/bs";


const main = () => {
    return(
            <div className="bg-gray-300">
                <Nav/>
                <Hero/>
                <section id="projectId">
                    <Project/>
                </section>
                <section id="skillsId">
                    <Skills/>
                </section>
                <section id="contactId">
                    <Footer/>
                </section>
                <BackToTopButton/>
            </div>

    )
}

export default main