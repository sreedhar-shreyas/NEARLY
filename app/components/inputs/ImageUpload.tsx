// Import necessary libraries
'use client';

import AWS from 'aws-sdk';
import Image from "next/image";
import { TbPhotoPlus } from 'react-icons/tb';
import React, { useState, useEffect } from 'react';
var AWS_ACCESS_KEY_ID=process.env.AWS_ACCESS_KEY_ID!;
var AWS_SECRET_ACCESS_KEY=process.env.AWS_SECRET_ACCESS_KEY!;

// AWS.config.update({
//   region: 'us-east-2',
//   credentials: new AWS.Credentials(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
// });
// const s3 = new AWS.S3();

const imageUrl = `https://shreyaswapi.s3.us-east-2.amazonaws.com/919742486271/image/WA.jpeg_1`;
// interface ImageUploadProps {
//   onChange: (value: string) => void;
//   value: string;
// }

// const MAX_FETCH_TIME_MS = 10000; // Maximum time allowed for fetching the image URL (10 seconds)

// const getLatestImageUrl () => {
//   const bucketName = 'shreyaswapi'; // Your S3 bucket name
//   const bucketRegion = 'us-east-2'; // Your S3 bucket region
//   const folderPrefix = '919742486271/image/'; // Your prefix

//   const params = {
//     Bucket: bucketName,
//     Prefix: folderPrefix,
//   };

//   try {
//     const data = await s3.listObjectsV2(params).promise();
//     const objects = data.Contents;

//     if (!objects || objects.length === 0) {
//       console.log('No objects found in S3 bucket.');
//       return null;
//     }

//     // Sort objects by LastModified date in descending order
//     const sortedObjects = objects.filter(obj => obj.LastModified).sort((a, b) => {
//       return (b.LastModified!.getTime() - a.LastModified!.getTime());
//     });

//     if (sortedObjects.length === 0) {
//       console.log('No objects with a defined LastModified date found in S3 bucket.');
//       return null;
//     }

//     // The first object is now the latest
//     const latestImageKey = sortedObjects[0].Key;

//     // Construct the image URL
//     // const imageUrl = `https://${bucketName}.s3.${bucketRegion}.amazonaws.com/${latestImageKey}`;
//     const imageUrl = `https://shreyaswapi.s3.us-east-2.amazonaws.com/919742486271/image/WA.jpeg`;
//     console.log(imageUrl);
//     return imageUrl;
//   } catch (error) {
//     console.error('Error fetching from S3:', error);
//     return null;
//   }
// };

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [fetching, setFetching] = useState<boolean>(false);

//   useEffect(() => {
//     if (!value && !imageUrl && !fetching) {
//       let isMounted = true;
//       let timeout: NodeJS.Timeout | null = null;

//       const fetchImage = async () => {
//         setFetching(true);
//         timeout = setTimeout(() => {
//           console.log('Image fetching timed out.');
//           setFetching(false);
//           if (isMounted) {
//             setImageUrl(null);
//           }
//         }, MAX_FETCH_TIME_MS);

//         const latestImageUrl = await getLatestImageUrl();
//         clearTimeout(timeout);
//         setFetching(false);
//         if (isMounted) {
//           setImageUrl(latestImageUrl);
//           onChange(latestImageUrl || ''); // Update the parent component
//         }
//       };

//       fetchImage();

//       return () => {
//         isMounted = false;
//         if (timeout) clearTimeout(timeout);
//       };
//     }
//   }, [value, onChange, imageUrl, fetching]);

  return (
    <div
      onClick={() => {}}
      className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
    >
      <TbPhotoPlus size={50} />
      <div className="font-semibold text-lg">
        Click to upload
      </div>
      {imageUrl && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            fill 
            style={{ objectFit: 'cover' }} 
            src={imageUrl}
            alt="Latest Image" 
          />
        </div>
      )}
      {/* {fetching && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-300 bg-opacity-50">
          <span className="text-neutral-800">Fetching...</span>
        </div>
      )} */}
    </div>
  );
};

export default ImageUpload;


// interface ImageUploadProps {
//   onChange: (value: string) => void;
//   value: string;
// }
// const ImageUpload = () => {
//   const [highestNumber, setHighestNumber] = useState(0);
//   const [highestImageUrl, setHighestImageUrl] = useState('');
  
//   useEffect(() => {
//     const fetchHighestNumberImage = async () => {
//       const imageUrl = `https://shreyaswapi.s3.us-east-2.amazonaws.com/919742486271/image/WA.jpeg_<1to10>`;
  
//       for (let i = 10; i >= 1; i--) { // Start from the highest number
//         const url = imageUrl.replace('<1to10>', i);
//         try {
//           const response = await fetch(url);
//           if (response.ok) {
//             setHighestNumber(i);
//             setHighestImageUrl(url);
//             break; // Once the highest number image is found, exit the loop
//           }
//         } catch (error) {
//           console.error('Error fetching image:', error);
//         }
//       }
//     };
  
//     fetchHighestNumberImage();
//   }, []);

//   return (
//     <div
//       onClick={() => {}}
//       className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
//     >
//       <TbPhotoPlus size={50} />
//       <div className="font-semibold text-lg">
//         Click to upload
//       </div>
//       {highestImageUrl && (
//         <div className="absolute inset-0 w-full h-full">
//           <Image
//             fill 
//             style={{ objectFit: 'cover' }} 
//             src={highestImageUrl}
//             alt={`Highest Number Image (${highestNumber})`} 
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUpload;