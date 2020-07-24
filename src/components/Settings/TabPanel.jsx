import React from "react";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <React.Fragment>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`settings_tabpanel_${index}`}
        aria-labelledby={`settings_tabpanel_${index}`}
        {...other}
      >
        {value === index && children}
      </div>
    </React.Fragment>
  );
};

export default TabPanel;
