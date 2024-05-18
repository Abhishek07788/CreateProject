import React, { useState } from "react";

const Output = ({ projectData }) => {
  const [isCopied, setIsCopies] = useState(false);

  const handleCopy = () => {
    setIsCopies(true);
    navigator.clipboard.writeText(JSON.stringify(projectData));
    setTimeout(() => {
      setIsCopies(false);
    }, 3000);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "35px",
          backgroundColor: "#2f2f2f",
          padding: "0px 10px",
        }}
      >
        <h4 style={{ color: "#fff" }}>Output</h4>
        <button onClick={handleCopy} style={{ cursor: "pointer" }}>
          {isCopied ? "Copied" : "Copy"}{" "}
        </button>
      </div>
      <div
        style={{
          minHeight: "300px",
          backgroundColor: "#0d0d0d",
          scrollbarColor: "#fff",
          overflow: "scroll",
          padding: "0px 10px",
        }}
      >
        <p
          style={{
            color: "#e4e4e4",
            padding: "10px",
            lineHeight: 1.5,
            wordBreak: "break-all",
            width: "100%",
          }}
        >
          {JSON.stringify(projectData)}
        </p>
      </div>
    </div>
  );
};

export default Output;
