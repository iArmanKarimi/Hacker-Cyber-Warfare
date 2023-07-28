import "./css/PromptLine.css";
import { useState } from "react";
import DirList from "./DirList";
import PropTypes from "prop-types";

import fs from "../game/fs";
import * as util from "../game/util";
import { appsUImeta } from "../game/Apps";
import Help from "./Help";

function PromptLine(props) {
  const [promptInput, setPromptInput] = useState("");
  const [promptLabel, setPromptLabel] = useState("Login:");

  // function login() {// ask username password (must server credentials)}
  function bash() {
    const { command, arg } = util.parseCommand(promptInput);

    let output;

    switch (command) {
      case "ls": {
        const { files, folders } = fs.list_dir();
        output = <DirList folders={folders} files={files} />;
        break;
      }
      case "cd": {
        const changedDir = fs.change_dir(arg);
        if (changedDir) {
          const path = util.formatPromptPWD(fs.format_path())
          setPromptLabel(path)
        } else {
          output = "" // TODO
        }
        break;
      }
      case "cd..":
        {
          const changedDirUp = fs.change_dir_up();
          if (changedDirUp) {
            const path = util.formatPromptPWD(fs.format_path())
            setPromptLabel(path)
          } else {
            output = "" // TODO
          }
          break;
        }
      case "del":
      case "rm":
        {
          const removed = fs.remove_file(arg);
          if (removed) {
            output = "" // TODO
          } else {
            output = "" // TODO
          }
          break;
        }
      default:
        {
          const helpCommands = [
            ["ls", "list directories"],
            ["cd", "change directory"],
            ["cd..", "change working directory to the parent directory"],
            ["del", "delete file"],
            ["help", "display commands and a brief description of them"],
          ];
          output = <Help commands={helpCommands} />;
          break;
        }
    }
    output ? props.appendOutput(output) : undefined;
  }

  function handleCommandEnter(e) {
    if (e.key === "Enter") {
      // FIXME what to do when telnet connects to server?
      // implement it here.
      if (promptInput in appsUImeta) {
        const appMeta = appsUImeta[promptInput];
        setPromptInput(appMeta.prompt);
        props.appendOutput(appMeta.message);
      }
      else {
        bash();
      }
      setPromptInput("");
    }
  }

  return (
    <div id="prompt-line">
      <span id="prompt-line-prompt">{promptLabel}</span>
      <input
        type="text"
        id="prompt-line-input"
        value={promptInput}
        onChange={(e) => setPromptInput(e.target.value)}
        onKeyDown={handleCommandEnter}
        autoFocus
      />
    </div>
  );
}

PromptLine.propTypes = {
  clearOutput: PropTypes.func.isRequired,
  appendOutput: PropTypes.func.isRequired,
};

export default PromptLine;
