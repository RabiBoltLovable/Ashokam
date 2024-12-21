import React from 'react';
import { BookOpen, Users, Trophy, Palette } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: 'Academic Excellence',
    description: 'Comprehensive curriculum following international standards'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Expert Faculty',
    description: 'Experienced educators dedicated to student success'
  },
  {
    icon: <Trophy className="h-8 w-8 text-blue-600" />,
    title: 'Sports & Activities',
    description: 'Wide range of extracurricular activities and sports'
  },
  {
    icon: <Palette className="h-8 w-8 text-blue-600" />,
    title: 'Creative Arts',
    description: 'Fostering creativity through arts and cultural programs'
  }
];

export default function Features() {
  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Ashokam International?</h2>
          <p className="mt-4 text-lg text-gray-600">Discover what makes our school unique</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}