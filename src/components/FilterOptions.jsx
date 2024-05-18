import React, { useState } from "react";
import Styles from "../css/layout.module.css";

const FilterOptions = ({ data, updateData }) => {
  const [form, setForm] = useState(data);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
    updateData({ ...form, [name]: checked });
  };

  return (
    <div className={Styles.container}>
      <h3>FILTER OPTIONS</h3>
      <div style={{ display: "grid", gap: "20px" }}>
        <label>
          <input
            type="checkbox"
            name="gatesurvey"
            checked={form.gatesurvey || false}
            onChange={handleChange}
          />
          Gate Survey
        </label>
        <label>
          <input
            type="checkbox"
            name="fraudDetection"
            checked={form.fraudDetection || false}
            onChange={handleChange}
          />
          Fraud Detection
        </label>
      </div>
    </div>
  );
};

export default FilterOptions;
