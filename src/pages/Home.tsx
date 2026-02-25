import About from "../sectoins/About";
import Hero from "../sectoins/Hero";
import Protfolio from "../sectoins/Protfolio";
import Blog from "../sectoins/Blog";
import Contact from "../sectoins/Contact";

export default function Home() {    
    return (
        <>
          <Hero />
          <About />
          <Blog />
          <Protfolio/>
          <Contact />
        </>
    );
}