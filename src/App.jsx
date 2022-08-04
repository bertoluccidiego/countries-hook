import { useState } from 'react';

import { useCountry } from './hooks/hooks';

import Country from './components/Country';
import Search from './components/Search';

function App() {
  const [name, setName] = useState('');
  const country = useCountry(name);

  return (
    <div>
      <Search setName={setName} />
      <Country country={country} />
    </div>
  );
}

export default App;
