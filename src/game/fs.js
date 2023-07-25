// I have successfully created the directory tree object
// now that we have the tree, we are going to use it.
// ls shows in 3xN grid
/* Problem: ls command
this command shows folders/files of current dir.
the current directory/path must be stored in something.
the path is stored in a string or array: 
```
path = "/dev/tty"
or
path = ["dev", "tty"]
```
*/
/** solution:
 * loop.
 */

import { Random } from "./Random";

//-------------------------------------//
const myIP = "192.168.0.1";
// later todo: add '..' element to [0] of files array for `cd..`
const dir_tree = {
  localhost: {
    files: ["bash", ".bashrc", ".profile", "cat", ".catrc", "passwd"],
  },
  "www.microsoft.com": {
    folders: {
      main: {
        files: [
          "index.html",
          "6575.dat",
          "tests.pwl",
          "main.html",
          "8467.dat",
          "admin.pwl",
          "board.html",
          "3496.dat",
          "super.pwl",
          "data.html",
          "3467.dat",
          "logs.txt",
          "1342.asp",
          "8230.dat",
          "scroll.js",
          "2343.asp",
          "3524.dat",
          "mo.js",
          "2344.asp",
          "2309.dat",
          "index.css",
          "help.html",
          "9275.dat",
          "3245.asp",
          "4365.dat",
          "3454.asp",
          "4398.dat",
        ],
      },
      data: {
        files: [
          "legal",
          "almost legal",
          "barely legal",
          "illegal",
          "fbi gonna come illegal",
          "windows1",
          "windows2",
          "windows3",
          "windows95",
          "windows98",
          "windowsnt",
          "windowsme",
          "windows2k",
          "windowsxp",
          "server2k",
          "server23",
          "office2000",
          "officexp",
          "visual studio",
          "C#",
          "J#",
          "VB",
        ],
      },
      logs: {
        files: Random.logs(),
      },
    },
    files: [
      ".temp",
      ".autoexec",
      ".bakup",
      "shell32.dll",
      "temp.txt",
      "setup.exe",
      "system32",
      "system.exe",
    ],
  },
};

class GameFileSystem {
  host_name = "localhost";
  root_dir = dir_tree[this.host_name];
  path_arr = []; // doesn't include '/'
  path_objects = [];

  format_path = () => `/${this.path_arr.join("/")}`;
  setHost = (host_name) => (this.host_name = host_name);
  get_current_dir = () => this.path_objects[this.path_objects.length - 1];

  change_dir(folder_name) {
    let folders = this.get_current_dir().folders;
    this.path_objects.push(folders[folder_name]);
    this.path_arr.push(folder_name);
    return true; // if folder exists
  }

  change_dir_up() {
    if (this.path_arr.length > 0) {
      this.path_arr.pop();
      this.path_objects.pop();
      return true;
    } else {
      // Cannot go up from root directory
      return false;
    }
  }

  list_dir() {
    const current_dir = this.get_current_dir();
    const files = current_dir.files;
    const folders = Object.keys(current_dir.folders);
    return { files: files, folders: folders };
  }
}

export default GameFileSystem;
