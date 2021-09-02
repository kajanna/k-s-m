import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MySkills from './components/MySkills'
import Hi from './components/Hi';
import MyReactProjects from './components/MyReactProjects';
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
     <MyReactProjects />
    <MySkills />
    <ContactMe />
    <Footer />
    </div>
    </>
  );
}

export default App;
