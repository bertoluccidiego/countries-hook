import { useState, useEffect } from 'react';

import countriesService from '../services/countries';

export function useField(type) {
  const [value, setValue] = useState('');

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    type,
    onChange,
  };
}

export function useCountry(name) {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    countriesService.getOne(name).then((result) => {
      setCountry(result);
    });
  }, [name]);

  if (!country) {
    return null;
  }

  return country[0];
}
