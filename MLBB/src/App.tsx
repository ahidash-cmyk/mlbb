

import Footer from './components/Footer'
import Navbar from './components/NavBar'
import About from './sectoins/About'
import Context from './sectoins/Context'
import Services from './sectoins/Services'

function App() {
 

  return (
    
       <div className='w-full min-w-full flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow overflow-scroll max-h-[75vh]'>
       
        <Services />
        <Context />
        <About />
      </main>
      <Footer />
    </div>
    
    
  )
}

export default App
