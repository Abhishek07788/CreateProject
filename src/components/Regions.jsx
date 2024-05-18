import React, { useState } from "react";
import Styles from "../css/layout.module.css";
import Select from "react-select";
import Specifications from "../data/specifications.json";

const uniqueCountries = Object.values(
  Specifications.reduce((acc, el) => {
    acc[el.country.value] = el.country;
    return acc;
  }, {})
);

const Regions = ({ data, updateData }) => {
  const [rows, setRows] = useState(data);

  const handleDropdownChange = (value) => {
    setRows(value);
    updateData(value);
  };

  return (
    <div className={Styles.container}>
      <h3>REGIONS</h3>
      <div>
        <Select
          options={uniqueCountries}
          onChange={(value) => handleDropdownChange(value)}
          placeholder="Country"
          value={rows}
          isClearable
          isMulti
        />
      </div>
    </div>
  );
};

export default Regions;
