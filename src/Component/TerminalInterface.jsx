import { useState } from "react";
import PropTypes from "prop-types";

function TerminalInterface(props) {
  return (
    <div>
      {props.outputs.map((output_text, index) => (
        <p key={index}>{output_text}</p>
      ))}
    </div>
  );
}

TerminalInterface.propTypes = {
  outputs: PropTypes.array.isRequired,
};

export default TerminalInterface;
