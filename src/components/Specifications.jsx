import React, { useEffect, useState } from "react";
import Styles from "../css/layout.module.css";
import specificationsData from "../data/specifications.json";

const Specifications = ({ data, regionsData, updateData }) => {
  const [rows, setRows] = useState(data);

  // Selecting by Checkbox
  const [updatedSpecificationData, setUpdatedSpecificationData] =
    useState(specificationsData);
  const handleCheck = (e, item) => {
    const { checked } = e.target;
    if (checked) {
      setRows((prev) => {
        const updatedData = [...prev, item];
        updateData(updatedData);
        return updatedData;
      });
    } else {
      setRows((prev) => {
        const updatedData = prev.filter((el) => el.id !== item.id);
        updateData(updatedData);
        return updatedData;
      });
    }
  };

  // Filtering by regions
  useEffect(() => {
    if (regionsData.length > 0) {
      const regions = regionsData.map((el) => el.value);
      setUpdatedSpecificationData(
        specificationsData.filter((item) =>
          regions.includes(item.country.value)
        )
      );
    }
  }, [regionsData]);

  // Adding a row
  const handleAdd = (item) => {
    setUpdatedSpecificationData((prev) => {
      const maxId = prev.reduce((max, row) => (row.id > max ? row.id : max), 0);
      const updatedData = [...prev, { ...item, id: maxId + 1 }];
      updateData(updatedData);
      return updatedData;
    });
  };

  // Deleting a row
  const handleDelete = (item) => {
    setUpdatedSpecificationData((prev) => {
      const updatedData = prev.filter((el) => el.id !== item.id);
      updateData(updatedData);
      return updatedData;
    });
  };

  return (
    <div className={Styles.container}>
      <h3>
        SPECIFICATION<span style={{ color: "red", fontSize: 18 }}>*</span>
      </h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>Country</th>
              <th>Language</th>
              <th>Target Group</th>
              <th>CPI($)</th>
              <th>LOI(MIN.)</th>
              <th>IR(%)</th>
              <th>Completes</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {updatedSpecificationData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={rows.some((r) => r.id === item.id)}
                    onChange={(e) => handleCheck(e, item)}
                  />
                </td>
                <td>{item.country.label}</td>
                <td>{item.language}</td>
                <td>{item.targetGroup}</td>
                <td>{item.cpi}</td>
                <td>{item.loi}</td>
                <td>{item.ir}</td>
                <td>{item.completed ? "YES" : "NO"}</td>
                <td style={{ textAlign: "center" }}>
                  <span
                    onClick={() => handleAdd(item)}
                    style={{
                      backgroundColor: "green",
                      padding: "2px 7px",
                      borderRadius: "50%",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </span>
                </td>
                <td style={{ textAlign: "center" }}>
                  <span
                    onClick={() => handleDelete(item)}
                    style={{
                      backgroundColor: "red",
                      padding: "1px 7px 2px 7px",
                      borderRadius: "50%",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specifications;
