import React from 'react';

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        <svg className={`absolute ${icon}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        </svg>
        {title}
      </dt>
      <dd className="inline">{description}</dd>
    </div>
  );
};

export default FeatureItem;
