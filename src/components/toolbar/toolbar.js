import React from "react";
import "./toolbar.css";
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

export default Toolbar;
