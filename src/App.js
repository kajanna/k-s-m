import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Skills from './components/Skills'
import About from './components/About';
import MyProjects from './components/MyProjects';
import WelcomeScreen from './components/WelcomeScreen'
import MainNavigation from './navigation/MainNavigation';
import Contact from './components/Contact';
import Footer from './navigation/Footer';

import './App.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  
  return (
    <>
    <MainNavigation />
    <div className="main">
    <WelcomeScreen />
    <About />
    <Skills />
    <MyProjects />
    <Contact />
    <Footer />
    </div>
    </>
  );
}

export default App;
