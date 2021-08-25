import './App.css';
import MySkills from './components/MySkills'
import AboutMe from './components/AboutMe';
import MyReactProjects from './components/MyReactProjects';
import WelcomeScreen from './components/WelcomeScreen'
import MainNavigation from './navigation/MainNavigation';
import ContactMe from './components/ContactMe';
import Footer from './navigation/Footer';

function App() {
  return (
    <>
    <MainNavigation />
    <WelcomeScreen />
    <AboutMe />
    <MyReactProjects />
    <MySkills />
    <ContactMe />
    <Footer />
    </>
  );
}

export default App;
