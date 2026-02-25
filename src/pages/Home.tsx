import About from "../sectoins/About";
import Context from "../sectoins/Context";
import Hero from "../sectoins/Hero";
import Services from "../sectoins/Services";
import Testimonials from "../sectoins/Testimonials";

export default function Home() {    
    return (
      <>
          <Hero />
        <Services />
        <Context />
        <About />
        <Testimonials />
        </>
    );
}