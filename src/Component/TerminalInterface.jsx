import { useState } from "react";

function TerminalInterface() {
  const [outputs, setOutputs] = useState(["Please enter your nick/alias..."]);

  const appendOutput = (new_output) => {
    setOutputs((prevState) => [...prevState, new_output]);
  };

  const clearOutput = () => {
    setOutputs([]);
  };

  return (
    <div>
      <button
        style={{ color: "black" }}
        onClick={() => appendOutput("Button clicked!")}
      >
        Click to add new output
      </button>
      {outputs.map((output_text, index) => (
        <p key={index}>{output_text}</p>
      ))}
    </div>
  );
}

export default TerminalInterface;
