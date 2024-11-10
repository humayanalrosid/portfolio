import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ activeSection, darkMode, toggleDarkMode }: NavbarProps) {
  const sections = ['projects', 'about', 'education', 'contact'];

  return (
    <nav className="hidden lg:flex flex-col fixed h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6">
      <div className="mb-12">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Humayan Al Rosid</h1>
        <p className="text-gray-600 dark:text-gray-400">WordPress Designer</p>
      </div>
      
      <div className="flex flex-col space-y-4 flex-grow">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`capitalize text-lg ${
              activeSection === section
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
            }`}
          >
            {section}
          </a>
        ))}
      </div>

      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        )}
      </button>
    </nav>
  );
}