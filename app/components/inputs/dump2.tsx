// // useAddressAutoComplete.ts

// import { useState } from 'react';
// import axios from 'axios';

// interface AddressAutoCompleteHook {
//   address: string;
//   suggestions: string[];
//   handleChange: (value: string) => void;
// }

// const useAddressAutoComplete = (): AddressAutoCompleteHook => {
//   const [address, setAddress] = useState('');
//   const [suggestions, setSuggestions] = useState<string[]>([]);

//   const handleChange = async (value: string): Promise<void> => {
//     setAddress(value);

//     // Fetch suggestions based on the entered value
//     await fetchSuggestions(value);
//   };

//   const fetchSuggestions = async (value: string): Promise<void> => {
//     try {
//       const response = await axios.get(
//         `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//           value
//         )}&key=59365a5378844f03a5b5da8b1eb3af8a`
//       );

//       // Extract suggestions from the API response
//       const suggestions = response.data.results.map(
//         (result: { formatted: string }) => result.formatted
//       );
//       setSuggestions(suggestions);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   return { address, suggestions, handleChange };
// };

// export default useAddressAutoComplete;




// 'use client';

// import React from 'react';
// import useAddressAutoComplete from '@/app/hooks/useCities';

// const AddressAutoComplete: React.FC = () => {
//   const { address, suggestions, handleChange } = useAddressAutoComplete();

//   return (
//     <div>
//       <label htmlFor="address">Enter Address:</label>
//       <input
//         type="text"
//         id="address"
//         value={address}
//         onChange={(e) => handleChange(e.target.value)}
//         placeholder="Start typing an address..."
//       />

//       <div>
//         {suggestions.map((suggest, index) => (
//           <div key={index}>{suggest}</div>
//         ))}
//       </div>

      
//     </div>


//   );
// };

// export default AddressAutoComplete;


