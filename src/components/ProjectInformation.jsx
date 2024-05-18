import React, { useState } from "react";
import Styles from "../css/layout.module.css";
import dropdownOptions from "../data/project_pre_data.json";

const ProjectInformation = ({ data, updateData }) => {
  const [form, setForm] = useState(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    updateData({ ...form, [name]: value });
  };

  const handleDropdownChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    updateData({ ...form, [name]: value });
  };

  return (
    <div className={Styles.container}>
      <h3>PROJECT INFORMATION</h3>
      <div>
        <div style={{ display: "flex", gap: "40px", marginBottom: "12px" }}>
          <div style={{ display: "grid", width: "100%" }}>
            <label>
              Project Name<span style={{ color: "red", fontSize: 18 }}>*</span>
            </label>
            <input
              type="text"
              required
              name={"projectName"}
              style={{ height: "28px" }}
              value={form.projectName || ""}
              onChange={handleChange}
              placeholder="Project Name"
            />
          </div>

          <div style={{ display: "grid", width: "100%" }}>
            <label>Work Order No. #</label>
            <input
              style={{ height: "28px" }}
              type="text"
              name="workOrderNumber"
              value={form.workOrderNumber || ""}
              onChange={handleChange}
              placeholder="Work Order Number"
            />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {dropdownOptions.map((item, index) => (
            <div
              key={index}
              style={{
                display: "grid",
              }}
            >
              <label>
                {item.name.replace("_", " ")}
                {item.required && (
                  <span style={{ color: "red", fontSize: 18 }}>*</span>
                )}
              </label>
              <select
                style={{ height: "32px" }}
                onChange={(e) =>
                  handleDropdownChange(item.name, e.target.value)
                }
                value={form[item.name] || ""}
              >
                <option value={""}>Select</option>
                {item.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            marginTop: "20px",
          }}
        >
          <label>Project Description</label>
          <textarea
            style={{ width: "99.5%" }}
            name="projectDescription"
            value={form.projectDescription || ""}
            onChange={handleChange}
            placeholder="Project Description"
            rows={7}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;
