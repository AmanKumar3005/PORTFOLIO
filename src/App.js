import Home from './components/Home';
import NavBar from "./components/NavBar";
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main className="px-4 sm:px-8">
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
