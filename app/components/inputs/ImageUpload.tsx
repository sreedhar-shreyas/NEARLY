// Import necessary libraries
import AWS from 'aws-sdk';

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { TbPhotoPlus } from 'react-icons/tb';


const AWS_ACCESS_KEY_ID=process.env.AWS_ACCESS_KEY_ID!;

const AWS_SECRET_ACCESS_KEY=process.env.AWS_SECRET_ACCESS_KEY!;

AWS.config.update({
  region: 'us-east-2',
  credentials: new AWS.Credentials(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
});
const s3 = new AWS.S3();
interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const getLatestImageUrl = async () => {
  const bucketName = 'shreyaswapi'; 
  const bucketRegion = 'us-east-2'; 

  const params = {
    Bucket: bucketName,
    Prefix: '919742486271/image/', 
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const objects = data.Contents;

    if (!objects || objects.length === 0) {
      console.log('No objects found in S3 bucket.');
      return '';
    }
 // Sort by LastModified 
 
    const sortedObjects = objects.filter(obj => obj.LastModified).sort((a, b) => {
      return (b.LastModified!.getTime() - a.LastModified!.getTime());
    });

    if (sortedObjects.length === 0) {
      console.log('No objects with a defined LastModified date found in S3 bucket.');
      return '';
    }

    // The first object is now the latest
    const latestImage = sortedObjects[0];

    
    const imageUrl = `https://${bucketName}.s3.${bucketRegion}.amazonaws.com/${latestImage.Key}`;
    console.log(imageUrl);
    return imageUrl;
  } catch (error) {
    console.error('Error fetching from S3:', error);
    return '';
  }
};

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const [imageUrl, setImageUrl] = useState(value);


  useEffect(() => {
    // Fetch the latest image only if the value prop is not provided
    if (!value) {
      const fetchImage = async () => {
        const latestImageUrl = await getLatestImageUrl();
        setImageUrl(latestImageUrl);
        onChange(latestImageUrl); // Update the parent component
      };

      fetchImage();
    }
  }, [value, onChange]);


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
    </div>
  );
};

export default ImageUpload;
// ImageUpload component
// const ImageUpload : React.FC<ImageUploadProps> = ({ onChange, value })=> {
//   useEffect(() => {
//     const fetchAndSetImage = async () => {
//       const imageUrl = await getLatestImageUrl();
//       onChange(imageUrl);
//     };

//     fetchAndSetImage();
//   }, [onChange]);

//   const handleUpload = useCallback((result: { info: { secure_url: string; }; }) => {
//     onChange(result.info.secure_url);
//   }, [onChange]);

//   return (
//     <div
//       onClick={() => {}}
//       className="
//         relative
//         cursor-pointer
//         hover:opacity-70
//         transition
//         border-dashed 
//         border-2 
//         p-20  
//         border-neutral-300
//         flex
//         flex-col
//         justify-center
//         items-center
//         gap-4
//         text-neutral-600
//       "
//     >
//       <TbPhotoPlus size={50} />
//       <div className="font-semibold text-lg">
//         Click to upload
//       </div>
//       {value && (
//         <div className="absolute inset-0 w-full h-full">
//           <Image
//             fill 
//             style={{ objectFit: 'cover' }} 
//             src={value} 
//             alt="House Added" 
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUpload;
