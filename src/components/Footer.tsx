import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" w-full bg-[#0f172a] py-10 text-center ">
      <div className="flex justify-center gap-5 mb-4 ">
        <a
          href="#"
          className="text-link hover:text-yellow-400 transition duration-300 text-lg hover:scale-120 transform"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-link hover:text-yellow-400 transition duration-300 text-lg hover:scale-120 transform"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-link hover:text-yellow-400 transition duration-300 text-lg hover:scale-120 transform"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-link hover:text-yellow-400 transition duration-300 text-lg hover:scale-120 transform"
        >
          <FaYoutube />
        </a>
      </div>
      <p className="text-gray-400 text-sm"> All rights reserved.</p>
    </footer>
  );
};
export default Footer;
