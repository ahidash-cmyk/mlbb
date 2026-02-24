import { useState } from "react";
        
import logo from "../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full bg-black/70 text-white z-50 backdrop-blur-md">
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/*logo*/}
        <div>   
          <img src={logo} alt="logo" className="w-auto h-12" />
        </div>
        {/*Desktop menu*/}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          <li className="hover:text-link cursor-pointer">Home</li>
          <li className="hover:text-link cursor-pointer"><a href="#about">About</a></li>
          <li className="hover:text-link cursor-pointer"><a href="#services">Services</a></li>
          <li className="hover:text-link cursor-pointer">Portfolio</li>
          <li className="hover:text-link cursor-pointer">Contact</li>
        </ul>
        {/*Mobile button*/}

        <div className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}>
            ☰   
        </div>

      </div>
        {/*Mobile menu*/}
        {isOpen && (
          <div className="lg:hidden bg-black px-6 pb-6 space-y-4 text-sm font-medium">
            <div className="hover:text-yellow-400 cursor-pointer">Home</div>
            <div className="hover:text-yellow-400 cursor-pointer">About</div>
            <div className="hover:text-yellow-400 cursor-pointer">Services</div>
            <div className="hover:text-yellow-400 cursor-pointer">Portfolio</div>
            <div className="hover:text-yellow-400 cursor-pointer">Contact</div>
          </div>
        )}
    </nav>
  );
};
export default Navbar;
