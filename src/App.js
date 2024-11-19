import React from 'react';

// Importing containers for each section of the website
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';

// Importing the Navbar component for consistent site navigation
import { Navbar } from './components';

// Importing global styles
import './App.css';

// Main application component
const App = () => {
  return (
    <div>
      {/* Navigation bar: stays consistent across all pages */}
      <Navbar />

      {/* Hero Header section: displays a captivating restaurant introduction */}
      <Header />

      {/* About Us: shares the restaurant's story and values */}
      <AboutUs />

      {/* Menu Section: highlights signature dishes with call-to-action */}
      <SpecialMenu />

      {/* Chef Section: introduces the team behind the culinary magic */}
      <Chef />

      {/* Intro Section: showcases a video or interactive feature */}
      <Intro />

      {/* Laurels Section: highlights awards, recognitions, and customer testimonials */}
      <Laurels />

      {/* Gallery Section: displays high-quality photos of food, ambiance, and events */}
      <Gallery />

      {/* Find Us: provides contact details, location map, and booking information */}
      <FindUs />

      {/* Footer Section: includes social links, subscription forms, and legal info */}
      <Footer />
    </div>
  );
};

export default App;

