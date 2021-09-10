import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import About from './components/About'
import Hi from './components/Hi';
import MyProjects from './components/MyProjects';
import WelcomeScreen from './components/WelcomeScreen'
import MainNavigation from './navigation/MainNavigation';
import ContactMe from './components/ContactMe';
import Footer from './navigation/Footer';

import './App.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  
  return (
    <>
    <MainNavigation />
    <div className="main">
    <WelcomeScreen />
    <Hi />
    <About />
    <MyProjects />
    <ContactMe />
    <Footer />
    </div>
    </>
  );
}

export default App;
