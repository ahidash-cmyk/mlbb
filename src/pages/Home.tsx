import About from "../sectoins/About";
import Blog from "../sectoins/Blog";
import Contact from "../sectoins/Contact";
import Hero from "../sectoins/Hero";
import Portfolio from "../sectoins/Protfolio";
import Services from "../sectoins/Services";
import Testimonials from "../sectoins/Testimonials";

export default function Home() {    
    return (
        <>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
        
        </>
    );
}