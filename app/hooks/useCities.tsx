
import countries from 'country-state-city';

const formattedcities = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedcities;

  const getByValue = (value: string) => {
    return formattedcities.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;