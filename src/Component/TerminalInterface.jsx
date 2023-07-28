import { useState } from "react";
import PropTypes from "prop-types";

function TerminalInterface(props) {
  return (
    <>
      <div>
        {props.outputs.map((output, index) => (
          <div key={index}>{output}</div>
        ))}
      </div>
      <br />
    </>
  );
}

export default TerminalInterface;
