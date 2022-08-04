function Country({ country }) {
  if (!country) {
    return <div>Not found...</div>;
  }

  return (
    <div>
      <h3>{country.name.common}</h3>
      <div>population {country.population}</div>
      <div>capital {country.capital}</div>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  );
}

export default Country;
