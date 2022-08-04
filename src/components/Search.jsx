import { useField } from '../hooks/hooks';

function Search({ setName }) {
  const nameInput = useField('text');

  function searchHandler(event) {
    event.preventDefault();

    setName(nameInput.value);
  }

  /* eslint-disable */
  return (
    <form onSubmit={searchHandler}>
      <input {...nameInput} />
      <button type="submit">search</button>
    </form>
  );
  /* eslint-enable */
}

export default Search;
