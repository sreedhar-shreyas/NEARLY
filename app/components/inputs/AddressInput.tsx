
'use client';

import React from 'react';
import useAddressAutoComplete from '@/app/hooks/useCities';
// AddressAutoComplete.tsx

import Select from 'react-select';

interface AddressAutoCompleteProps {
  value?: string;
  onChange: (value: string) => void;
}

const AddressAutoComplete: React.FC<AddressAutoCompleteProps> = ({ value, onChange }) => {
  const { address, suggestions, handleChange } = useAddressAutoComplete();

  const formattedOptions = suggestions.map((suggest) => ({
    label: suggest,
    value: suggest,
  }));

  return (
    <div>
      <Select
        placeholder="Enter Address..."
        isClearable
        options={formattedOptions}
        value={formattedOptions.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption?.value || '')}
        onInputChange={(inputValue) => handleChange(inputValue)}
      />

     
    </div>
  );
};

export default AddressAutoComplete;
// AddressAutoComplete.tsx
// AddressAutoComplete.tsx

