import React from 'react';

const educationData = [
  {
    degree: 'Wordpress Certification',
    school: 'Template Monster',
    year: '2024',
    description: 'Specialized in Wordpress'
  },
  {
    degree: 'Bachelor of Science in Mathematics',
    school: 'University of Kalyani',
    year: '2021 - 2024',
    description: 'Specialized in Mathematics and Computer Science'
  },
  {
    degree: 'Bachelor of Computer Application',
    school: 'IGNOU',
    year: '2024 - Present',
    description: 'Focus on UI/UX, Website Design and Digital Media'
  }
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen p-6 lg:p-12 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
              <p className="text-blue-600 dark:text-blue-400">{edu.year}</p>
              <p className="text-gray-500 dark:text-gray-500 mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}