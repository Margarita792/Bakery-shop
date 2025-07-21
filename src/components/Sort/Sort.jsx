import React from "react";
import style from "./Sort.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  searchTitle,
  selectSearch,
  sortPrice,
} from "../../redux/sliceProducts";

function Sort() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  return (
    <>
      <div className={style.wrapSort}>
        <input
          value={search}
          onChange={(e) => {
            dispatch(searchTitle({ value: e.target.value }));
          }}
          className={style.input}
          name="search"
          type="text"
          placeholder="Search..."
        />
        <select
          onChange={(e) => {
            dispatch(sortPrice({ value: e.target.value }));
          }}
          className={style.select}
        >
          <option value="byDefault">Sort by default</option>
          <option value="cheap"> cheap </option>
          <option value="expensive">expensive</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>
      <div></div>
    </>
  );
}
export default Sort;
