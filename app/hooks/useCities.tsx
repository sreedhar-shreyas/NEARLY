// // useAddressAutoComplete.ts

import { useState } from 'react';
import axios from 'axios';

interface AddressAutoCompleteHook {
  address: string;
  suggestions: string[];
  handleChange: (value: string) => void;
}

const useAddressAutoComplete = (): AddressAutoCompleteHook => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (value: string): void => {
    setAddress(value);
  
    if (value.trim() !== '' ||value.trim().length>1) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };
  const fetchSuggestions = async (value: string): Promise<void> => {
    try {
      const encodedValue = encodeURIComponent(value);

      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodedValue}&key=59365a5378844f03a5b5da8b1eb3af8a`
        
        
      );
      console.log(response);


      // Extract suggestions from the API response
      const suggestions = response.data.results.map(
        (result: { formatted: string }) => result.formatted
      );
      console.log(suggestions);

      setSuggestions(suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  return { address, suggestions, handleChange };
};

export default useAddressAutoComplete;

