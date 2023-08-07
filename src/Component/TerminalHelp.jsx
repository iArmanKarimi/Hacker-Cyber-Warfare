import "./css/Help.css";
import React from "react";
import PropTypes from "prop-types";

const cmdHelp = [
  ["ls", "list directories"],
  ["cd", "change directory"],
  ["cd..", "change working directory to the parent directory"],
  ["del", "delete file"],
  ["help", "display commands and a brief description of them"],
]
const appHelp = [
  ['dns', 'get IP of host'],
  ['ping', 'checks if server is up.'],
  ['nmap', 'search for open ports'],
  ['telnet', 'connect to server. usage: telnet <IP> <port>'],
  ['vck', 'virus creation kit'],
  ['copy', 'copy a file. usage: copy <file_name>'],
  ['john', 'password cracker. usage: john <IP> <port>']
]

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

export const TerminalCmdHelp = () => {
  return <>
    <Help commands={cmdHelp} />
    <br />
    <i>* To see help for apps, type: help --app</i>
  </>
}

export const TerminalAppHelp = () => <Help commands={appHelp} />
