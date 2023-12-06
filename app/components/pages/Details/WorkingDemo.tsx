import React from 'react'
import { useState } from 'react';
import FeatureContent from './FeatureContent';
import FeatureImage from './FeatureImage';

function WorkingDemo() {
    
//   return (
//     <div>
//         <input
//                                 type="submit"
//                                 value="Upload"
//                                 id="newslettersubmit"
//                                 className='rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//                             />
//     </div>

    
//   )

return (
        <div className="overflow-hidden bg-white py-24 sm:py-32 bg-white rounded-lg shadow m-4 dark:bg-white-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <FeatureContent />
          
          
          <FeatureImage  images={[
    'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
  ]} />
        </div>
      </div>
    </div>
  );
}

export default WorkingDemo