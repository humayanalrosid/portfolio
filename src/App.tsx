import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('projects');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev: boolean) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="flex">
        <Navbar
          activeSection={activeSection}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>

        {mobileMenuOpen && (
          <MobileMenu
            activeSection={activeSection}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        )}

        <main className="flex-grow lg:ml-64">
          <Projects />
          <About />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
