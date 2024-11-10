import React from 'react';
import { X, Sun, Moon } from 'lucide-react';

interface MobileMenuProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({ activeSection, darkMode, toggleDarkMode, setMobileMenuOpen }: MobileMenuProps) {
  const sections = ['projects', 'about', 'education', 'contact'];

  return (
    <div className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40">
      <div className="flex flex-col p-8 space-y-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Sarah Parker</h1>
          <p className="text-gray-600 dark:text-gray-400">WordPress Designer</p>
        </div>
        
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`capitalize text-xl ${
              activeSection === section
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {section}
          </a>
        ))}

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 self-start"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}