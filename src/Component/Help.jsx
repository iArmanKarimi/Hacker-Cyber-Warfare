import "./css/Help.css";
import React from "react";
import PropTypes from "prop-types";

const Help = ({ commands }) => {
  return (
    <div className="cmd-help">
      {commands.map((command) => (
        <React.Fragment key={command[0]}>
          <div>{command[0]}</div>
          <div>{command[1]}</div>
        </React.Fragment>
      ))}
    </div>
  );
};

Help.propTypes = {
  commands: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Help;
