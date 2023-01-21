import styles from "./search.module.scss";
import { FcSearch } from "react-icons/fc";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchForm = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchValue.trim().length > 0) {
      router.push(`/search/${searchValue}`);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form} role="search">
      <input
        id="search"
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
        required
      />
      <button type="submit">
        <FcSearch />
      </button>
    </form>
  );
};

export default SearchForm;
