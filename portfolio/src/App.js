import './App.css';
import Navbar from './components/navbar.js';
import Profile from './components/profile.js';
import Project from './components/project.js';
import Work from './components/work.js';
import About from './components/about.js';

function App() {

  return (
    <>
      <Navbar />
      <Profile />
      <Project />
      <Work />
      <About />
    </>
  );
}

export default App;
