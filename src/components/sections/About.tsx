import React from 'react';

const skills = ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Design'];

export default function About() {
  return (
    <section id="about" className="min-h-screen p-6 lg:p-12 bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1631624224925-b7810331159b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="Humayan Al Rosid"
            className="w-64 h-64 object-cover rounded-full"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate WordPress designer with over 1 years of experience creating beautiful, 
              functional websites. My approach combines clean design principles with cutting-edge 
              technology to deliver exceptional user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm text-center"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}