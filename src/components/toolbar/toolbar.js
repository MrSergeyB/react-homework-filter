import React from "react";
import "./toolbar.css";
import PropTypes from "prop-types";

const Toolbar = props => {
  const {filters, selected, onSelectFilter} = props;

  return (
    <div>
      <ul className="filters-ul">
        {filters.map((filter, id) => {
          return (
            <li
              key={id}
              onClick={e => onSelectFilter(e.target.textContent)}
              className={filter === selected ? "filters active" : "filters"}
            >
              {filter}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Toolbar.propTypes = {
  filters: PropTypes.string,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
};

export default Toolbar;
