import React from 'react';
import safety from '../images/safety.jpg';

const Safety: React.FC = () => {

    const gradientBackground = {
        background: 'linear-gradient(90deg, #f8cee8 ,#ffffff, #c1e0fa)', // sea blue to purple pink
      };

  return (

<div className="overflow-hidden bg-white py-24 sm:py-32" style={gradientBackground}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Safety Tips</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Ensuring the safety and well-being of our community members is our top priority. As you embark on the exciting journey of searching for the perfect apartment, it&apos;s crucial to prioritize safety in every step of the way. From exploring potential neighborhoods to finalizing lease agreements, here are some essential safety tips to keep in mind:</p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" />
                      </svg>
                      ⚠️Research Neighborhoods:
                    </dt>
                    <dd className="inline">Before visiting any apartment, research the neighborhoods thoroughly. Check local crime rates, proximity to emergency services, and community reviews to make informed decisions.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" />
                      </svg>
                      ⚠️Check Security Measures:
                    </dt>
                    <dd className="inline">Evaluate the security features of the apartment building, such as well-lit common areas, secure entry systems, and the presence of surveillance cameras. These measures contribute to a safer living environment.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" />
                      </svg>
                      ⚠️Meet with the Landlord:
                    </dt>
                    <dd className="inline">Establish a relationship with the landlord or property manager. Clear communication ensures a prompt response to any safety concerns or maintenance issues that may arise.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path />
                        <path fill-rule="evenodd"  clip-rule="evenodd" />
                      </svg>
                      ⚠️Understand Lease Terms:
                    </dt>
                    <dd className="inline">Thoroughly read and understand the lease agreement. Be aware of safety-related clauses, emergency procedures, and contact information for property management.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div>
            <img src="safety.jpg" alt="safety" style={{ width: '48rem', maxWidth: 'none', borderRadius: '1.5rem', boxShadow: '0 0 1rem rgba(189, 189, 189, 0.1)', border: '1px solid rgba(163, 163, 163, 0.1)', marginLeft: '-4px' }} />

            </div>
          
          </div>
        </div>
      </div>
  );
};

export default Safety;
