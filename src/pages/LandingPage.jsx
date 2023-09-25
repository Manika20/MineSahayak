
import React from 'react';
import Herosection from '../components/Herosection';
import FeatureSection from '../components/FeatureSection';

const LandingPage = () => {
  return (
    <div>
      {/* Create different components or sections in the components folder and render them here */}
      {/* Just like navbar, header, footer, about, features, faq, etc */}
      {/* Do not directly write the code of any section here */}
      {/* MineSahayak */}
      <div className='flex flex-col'>
      <Herosection />
      <FeatureSection className=''/>
      </div>
    </div>
  );
};
export default LandingPage;