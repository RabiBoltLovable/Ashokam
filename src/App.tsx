import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Features from './components/Features/Features';
import Programs from './components/Programs/Programs';
import SubjectList from './components/Academics/SubjectList';
import Stats from './components/Stats';
import Facilities from './components/Facilities/Facilities';
import NewsSection from './components/News/NewsSection';
import PhotoGallery from './components/Gallery/PhotoGallery';
import AcademicCalendar from './components/Calendar/AcademicCalendar';
import LocalEvents from './components/LocalEvents/LocalEvents';
import VirtualTourSection from './components/VirtualTour/VirtualTourSection';
import AlumniSection from './components/Alumni/AlumniSection';
import AchievementsSection from './components/Achievements/AchievementsSection';
import FacultySection from './components/Faculty/FacultySection';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Curriculum</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive education following Nepal curriculum standards</p>
          </div>
          <SubjectList />
        </div>
      </div>
      <Stats />
      <FacultySection />
      <Facilities />
      <VirtualTourSection />
      <AchievementsSection />
      <NewsSection />
      <PhotoGallery />
      <AlumniSection />
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AcademicCalendar />
        </div>
      </div>
      <LocalEvents />
      <Testimonials />
      <Contact />
      <Newsletter />
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Ashokam International School, Gaur, Nepal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;