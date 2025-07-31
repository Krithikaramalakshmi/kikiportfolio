import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''} relative overflow-x-hidden`}>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 min-h-screen text-white relative">
          <ParticleBackground />
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </motion.div>
          
          <Chatbot />
        </div>
      )}
    </div>
  );
}

export default App;