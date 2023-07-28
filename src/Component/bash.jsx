import fs from "../game/fs";
import Help from "./Help";
import DirList from "./DirList";
import * as util from "../game/util";

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
            const helpCommands = [
                ["ls", "list directories"],
                ["cd", "change directory"],
                ["cd..", "change working directory to the parent directory"],
                ["del", "delete file"],
                ["help", "display commands and a brief description of them"],
            ];
            return {
                output: <Help commands={helpCommands} />,
            };
        }
        default: {
            return {
                output: `'${command}' is not recognized as a command or program.`,
            };
        }
    }
}