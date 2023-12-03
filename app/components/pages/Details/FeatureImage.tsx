import React from 'react';

interface FeatureImageProps {
  images: string[];
}

function FeatureImage({ images }: FeatureImageProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Product screenshot ${index + 1}`}
          className="w-[48rem]  max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
        //   className="w-full sm:w-full md:w-[32rem] mt-4 object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[40rem] lg:-ml-0"

        />
      ))}
    </div>
  );
}

export default FeatureImage;
