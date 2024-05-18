import React from "react";
import Styles from "../css/layout.module.css";
import Output from "../components/Output";

const SubmitSection = ({ projectData, onCancel, onSubmit, error }) => {
  return (
    <div className={Styles.container}>
      <h3>Submit Section</h3>
      {error && (
        <h5 style={{ color: "red", textAlign: "center" }}>
          Required! <br />
          {error}
        </h5>
      )}
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={onCancel}
          type="button"
          style={{
            backgroundColor: "#f44336",
            padding: "10px 20px",
            color: "white",
            width: "50%",
            border: "none",
            cursor: "pointer",
          }}
          title="By clicking it the form will be reset!"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onSubmit}
          style={{
            backgroundColor: "#4caf50",
            padding: "10px 20px",
            color: "white",
            width: "50%",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>

      {projectData && <Output projectData={projectData} />}
    </div>
  );
};

export default SubmitSection;
