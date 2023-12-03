import React from 'react'
import FeatureItem from './FeatureItem';

function FeatureList() {
    return (
        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
          <FeatureItem icon="left-1 top-1 h-5 w-5 text-indigo-600" title="Signup using College mail Id: " description="Loging in through your college account helps us to find if you are legit students and would be connecting with your peers" />
          <FeatureItem icon="left-1 top-1 h-5 w-5 text-indigo-600" title="Enter Your Preferences: " description="You can get any kind of roomates based on the preferences mabe like vegan, party freaks and many more" />
          <FeatureItem icon="left-1 top-1 h-5 w-5 text-indigo-600" title="Search or Post the Listing: " description="You can find the roomates through the active listing or can post your own listing for finding roomates" />
        </dl>
      );
}

export default FeatureList