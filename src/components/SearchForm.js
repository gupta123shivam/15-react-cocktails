import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();
  const searchValue = React.useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your fav cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={() => {
              setSearchText(searchValue.current.value);
            }}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
