import React from "react";

const SearchInput = ({ fetchQuery }) => {
  return (
    <form onSubmit={fetchQuery}>
      <input
        type="text"
        name="query"
        placeholder="Enter something to find on Reddit..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;
