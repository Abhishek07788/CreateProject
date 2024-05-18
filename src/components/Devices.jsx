import React, { useState } from "react";
import Styles from "../css/layout.module.css";

const Devices = ({ data, updateData }) => {
  const [form, setForm] = useState(data);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
    updateData({ ...form, [name]: checked });
  };

  return (
    <div className={Styles.container}>
      <h3>DEVICES</h3>
      <div style={{ display: "grid", gap: "20px" }}>
        <label>
          <input
            type="checkbox"
            name="mobile"
            checked={form.mobile || false}
            onChange={handleChange}
          />
          Mobile
        </label>
        <label>
          <input
            type="checkbox"
            name="tablet"
            checked={form.tablet || false}
            onChange={handleChange}
          />
          Tablet
        </label>
        <label>
          <input
            type="checkbox"
            name="desktop"
            checked={form.desktop || false}
            onChange={handleChange}
          />
          Desktop
        </label>
      </div>
    </div>
  );
};

export default Devices;
