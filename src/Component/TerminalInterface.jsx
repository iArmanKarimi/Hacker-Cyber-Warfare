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

TerminalInterface.propTypes = {
  outputs: PropTypes.array
}

export default TerminalInterface;
