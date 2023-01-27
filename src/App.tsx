 
import { useState } from 'react';
import './app.scss';
import About from './components/pages/about/About';

import Home from "./components/pages/home/Home";
import Projects from './components/pages/projects/Projects';
import Skills from './components/pages/skills/Skills';
import NavBar from './components/shared/navbar/NavBar';
import Menu from './components/shared/menu/Menu';
import Contact from './components/pages/contact/Contact';

function App() {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [ColorBlack, setColorBlack] = useState(false)
  return (
    <div className="app">
      <header className="app-header">
        <NavBar menuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={MenuOpen} setMenuOpen={setMenuOpen}/>
      </header>
      <main className='section'>
        <Home />        
        <Skills />
        <Projects />
        <About />
        <Contact/>
        
      </main>
    </div>
  );
}

export default App;
