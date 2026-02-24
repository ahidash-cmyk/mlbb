import aboutwallpaper from '../assets/aboutwallpaper.png'

export default function About() {
    return (
     <div id="about" className="relative flex flex-col items-center justify-center h-[50vh] bg-gray-100 text-center overflow-hidden">
        <img src={aboutwallpaper} alt="wallpaper" className="h-12 w-auto inset-0 absolute" />
        <h1 className="text-4xl font-bold">About Us</h1>
        <h3 className="text-xl mt-4">Learn more about our company and missions</h3>
     </div>
    
    )
}
