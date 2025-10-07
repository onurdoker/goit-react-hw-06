import { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice.js";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  
  const nameId = useId();
  const [error, setError] = useState("");
  
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  
  const handleSearchSubmit = (event) => {
    const value = event.target.value;
    if (value === "" || /^[A-Za-zĞÜŞİÖÇğüşıöç\s]+$/.test(value)) {
      return (event.currentTarget.value);
    } else {
      setError("Search can only contain letters and spaces");
    }
    
    dispatch(changeFilter(value));
  };
  
  return (
      <div className={styles.search}>
        <label htmlFor={nameId}>Find contact by name</label>
        <input
            type={"text"}
            value={filter}
            onChange={handleSearchSubmit}
            id={nameId}
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
  );
};

export default SearchBox;