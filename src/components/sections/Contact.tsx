import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen p-6 lg:p-12 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">Get in Touch</h2>
        
        <form className="space-y-6 mb-12">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6">
          {[
            { Icon: Github, href: '#' },
            { Icon: Linkedin, href: '#' },
            { Icon: Instagram, href: '#' },
            { Icon: Mail, href: '#' }
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}