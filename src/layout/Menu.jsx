import React from "react";
import Styles from "../css/layout.module.css";
const Menu = ({ onClick, selectedMenu, menuItems }) => {
  return (
    <div className={Styles.menu}>
      <h2 className={Styles.LogoTitle}>Manage Project</h2>
      {menuItems.map((item, i) => (
        <div
          key={item.id}
          style={{
            borderTop: i === 0 ? "1px solid #00000070" : "",
          }}
          className={
            selectedMenu.id === item.id
              ? Styles.menuItemSelected
              : Styles.menuItem
          }
          onClick={() => onClick(item)}
        >
          {item.section.replace("_", " ")}
        </div>
      ))}
    </div>
  );
};

export default Menu;
