

import Footer from './components/Footer'
import Navbar from './components/NavBar'
import Hero from './sectoins/Hero'

function App() {
 

  return (
    
       <div className='w-full min-w-full flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow overflow-scroll max-h-[75vh]'>
        <Hero />
      </main>
      <Footer />
    </div>
    
    
  )
}

export default App
