import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full min-w-full flex flex-col min-h-screen min-h-[10vh]">
      <Navbar />
      <main className="flex-grow overflow-y-scroll max-h-[90vh]">
        <Home/>
      <Footer />
      </main>
    </div>
  );
}

export default App;
