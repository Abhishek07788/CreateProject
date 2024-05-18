import React, { useState } from "react";
import ProjectInformation from "./components/ProjectInformation";
import Regions from "./components/Regions";
import Specifications from "./components/Specifications";
import Devices from "./components/Devices";
import FilterOptions from "./components/FilterOptions";
import Menu from "./layout/Menu";
import SubmitSection from "./layout/SubmitSection";
import Styles from "./css/layout.module.css";

const initialFormValues = {
  projectInformation: {},
  devices: {},
  filterOptions: {},
  regions: [],
  specifications: [],
};
const menuItems = [
  { id: 1, section: "Project_Information" },
  { id: 2, section: "Devices" },
  { id: 3, section: "Filter_Option" },
  { id: 4, section: "Regions" },
  { id: 5, section: "Specifications" },
  { id: 6, section: "Submit_Section" },
];

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0]);
  const [projectData, setProjectData] = useState();
  const [formData, setFormData] = useState(initialFormValues);
  const [error, setError] = useState("");

  // changing the selected
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  // updating the form data
  const updateFormData = (section, data) => {
    setError("");
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  // clearing the form
  const onCancel = () => {
    setFormData(initialFormValues);
    setProjectData();
  };

  // submitting the form
  const handleSubmit = () => {
    if (
      !formData.projectInformation.projectName ||
      !formData.projectInformation.Project_Type ||
      formData?.specifications?.length <= 0
    ) {
      setError(
        `Please add ${
          !formData.projectInformation.projectName ? "Project Name! " : ""
        } ${
          !formData.projectInformation.Project_Type ? "Project Type! " : ""
        } ${
          formData?.specifications?.length <= 0 ? "Specifications!" : ""
        }, marked by star(*)`
      );
      return;
    }
    setProjectData(formData);
    console.log("JSON_Data: ", formData);
    setError("");
  };

  return (
    <div className={Styles.app}>
      <Menu
        menuItems={menuItems}
        onClick={handleMenuClick}
        selectedMenu={selectedMenu}
      />
      <div className={Styles.formSection}>
        {selectedMenu.section === "Project_Information" && (
          <ProjectInformation
            data={formData.projectInformation}
            updateData={(data) => updateFormData("projectInformation", data)}
          />
        )}
        {selectedMenu.section === "Devices" && (
          <Devices
            data={formData.devices}
            updateData={(data) => updateFormData("devices", data)}
          />
        )}
        {selectedMenu.section === "Filter_Option" && (
          <FilterOptions
            data={formData.filterOptions}
            updateData={(data) => updateFormData("filterOptions", data)}
          />
        )}
        {selectedMenu.section === "Regions" && (
          <Regions
            data={formData.regions}
            updateData={(data) => updateFormData("regions", data)}
          />
        )}
        {selectedMenu.section === "Specifications" && (
          <Specifications
            data={formData.specifications}
            regionsData={formData.regions}
            updateData={(data) => updateFormData("specifications", data)}
          />
        )}
        {selectedMenu.section === "Submit_Section" && (
          <SubmitSection
            projectData={projectData}
            onCancel={onCancel}
            onSubmit={handleSubmit}
            error={error}
          />
        )}
        {/* previous & next section */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              visibility: selectedMenu.id <= 1 ? "hidden" : "visible",
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedMenu(menuItems[selectedMenu.id - 2]);
            }}
          >
            Back
          </button>
          <button
            style={{
              visibility:
                selectedMenu.id >= menuItems.length ? "hidden" : "visible",
              cursor: "pointer",
            }}
            onClick={() => {
              setSelectedMenu(menuItems[selectedMenu.id]);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
