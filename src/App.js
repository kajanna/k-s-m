import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Switch, Route, Redirect } from 'react-router-dom';
import Skills from './components/Skills'
import About from './components/About';
import Projects from './components/Projects';
import WelcomeScreen from './components/WelcomeScreen'
import MainNavigation from './navigation/MainNavigation';
import Contact from './components/Contact';
import Footer from './navigation/Footer';

import './App.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainNavigation />
          <div className="main">
            <WelcomeScreen />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
