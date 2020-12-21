const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        value={searchField}
      />
    </div>
  );
};

export default SearchBox;