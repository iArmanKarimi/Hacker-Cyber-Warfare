import fs from "./fs";

export default commands = {
  ls: fs.list_dir,
  cd: fs.change_dir,
  "cd..": fs.change_dir_up,
  rm: fs.remove_file,
  del: fs.remove_file,

  // TODO
  // change format to: [['ls', 'list directories'], [...]]
  // this allows UI to divide name and description in two colums
  // resulting in a fixed gap between them.
  help: [
    `ls - list directories`,
    `cd - change directory`,
    "cd.. - change working directory to the parent directory",
    "del - delete file",
    "help - display commands and a brief description of them",
  ],
};
