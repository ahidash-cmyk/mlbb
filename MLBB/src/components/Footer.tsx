import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className=" w-full bg-[#1e1e1e] py-10 text-center ">
            <div className="flex justify-center gap-5 mb-4">
                <a href="#" className="text-link hover:text-white transition text-lg"><FaFacebookF/></a>
                <a href="#" className="text-link hover:text-white transition text-lg"><FaTwitter/></a>
                <a href="#" className="text-link hover:text-white transition text-lg"><FaInstagram/></a>
                <a href="#" className="text-link hover:text-white transition text-lg"><FaYoutube/></a>
            </div>
            <p className="text-gray-400 text-sm"> All rights reserved.</p>
        </footer>
    )
}
export default Footer;
