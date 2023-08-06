import fs from "../game/fs";
import Help from "./Help";
import DirList from "./DirList";
import * as util from "../game/util";
import { appNames } from "./run";

// shows usage for running apps from terminal
const appHelp = [
    ['dns', 'get IP of host'],
    ['ping', 'checks if server is up.'],
    ['nmap', 'search for open ports'],
    ['telnet', 'connect to server. usage: telnet <IP> <port>'],
    ['vck', 'virus creation kit'],
    ['copy', 'copy a file. usage: copy <file_name>'],
    ['john', 'password cracker. usage: john <IP> <port>']
]
const cmdHelp = [
    ["ls", "list directories"],
    ["cd", "change directory"],
    ["cd..", "change working directory to the parent directory"],
    ["del", "delete file"],
    ["help", "display commands and a brief description of them"],
];
export default function bash(commandInput) {
    const { command, arg } = util.parseCommand(commandInput);

    switch (command) {
        case "ls": {
            const { files, folders } = fs.list_dir();
            return { output: <DirList folders={folders} files={files} /> };
        }
        case "cd": {
            const changedDir = fs.change_dir(arg);
            if (changedDir) {
                const path = util.formatPromptPWD(fs.format_path());
                return { path };
            } else {
                return { output: "System cannot find the path specified because it does not exist." };
            }
        }
        case "cd..": {
            const changedDirUp = fs.change_dir_up();
            if (changedDirUp) {
                const path = util.formatPromptPWD(fs.format_path());
                return { path };
            } else {
                return { output: "Cannot go up from root directory." };
            }
        }
        case "del":
        case "rm": {
            const removed = fs.remove_file(arg);
            if (removed) {
                return { output: `Successfully deleted '${arg}'` };
            } else {
                return { output: `Cannot find file '${arg}'` };
            }
        }
        case "cls":
        case "clear": {
            return { clearOutput: true };
        }
        case "help": {

            const cmdHelpJSX = <>
                <Help commands={cmdHelp} />
                <br />
                <i>* To see help for apps, type: help --app</i>
            </>
            const appHelpJSX = <>
                <Help commands={appHelp} />
            </>
            return {
                output: (arg === '--app' || arg === '-app')
                    ? appHelpJSX
                    : cmdHelpJSX,
            };
        }
        default: {
            return {
                output: `'${command}' is not recognized as a command or program.`,
            };
        }
    }
}