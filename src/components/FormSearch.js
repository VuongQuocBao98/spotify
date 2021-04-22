import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { actSearch } from "../actions/query";

FormSearch.propTypes = {};

function FormSearch(props) {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function onChangeQuey(e) {
    setQuery(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const valueQuery = query;
    const action = actSearch(valueQuery);
    dispatch(action);
  };
  return (
    <div className="panel-heading">
      <form className="form-inline">
        <div className="form-group">
          <input
            name="username"
            type="text"
            className="form-control"
            placeholder="Enter artist name ..."
            value={query}
            onChange={onChangeQuey}
          />
          <button
            style={{ marginLeft: "3px" }}
            onClick={handleSearch}
            type="submit"
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSearch;
