import { useState } from "react";
import PropTypes from "prop-types";
import "./css/TerminalInterface.css"

function TerminalInterface(props) {
  return (
    <>
      <div id="terminal-output">
        {props.outputs.map((output, index) => (
          <div key={index}>{output}</div>
        ))}
      </div>
      <br />
    </>
  );
}

TerminalInterface.propTypes = {
  outputs: PropTypes.array
}

export default TerminalInterface;
