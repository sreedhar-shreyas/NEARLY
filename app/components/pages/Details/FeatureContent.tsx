import React from 'react'
import FeatureList from './FeatureList';

function FeatureContent() {
    return (
        <div className="lg:pr-8 lg:pt-4">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Find You Roooms and Roomate Faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">

            For college students, finding the perfect room and compatible roommates is a crucial endeavor. By leveraging online platforms and personal connections, students can discover housing options tailored to their preferences and budget. Proximity to campus is often a top priority, saving time on commuting and fostering a sense of community.        </p>
            <FeatureList />
          </div>
        </div>
    
      );
}

export default FeatureContent