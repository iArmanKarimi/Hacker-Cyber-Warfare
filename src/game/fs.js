import Random from "./Random.js";
import { onRemove } from "./Mission.js";

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

class FileSystem {
  static host_name = "localhost";
  static path_arr = [];
  static path_objects = [];

  static reset_path() {
    FileSystem.path_arr = [];
    FileSystem.path_objects = [FileSystem.get_root_dir()];
  }

  static get_root_dir() {
    return dir_tree[FileSystem.host_name];
  }

  static set_host(host_name) {
    if (host_name in dir_tree) {
      FileSystem.host_name = host_name;
      FileSystem.reset_path();
      return true;
    }
    return false;
  }

  static get_current_dir() {
    return FileSystem.path_objects[FileSystem.path_objects.length - 1];
  }

  static format_path() {
    return `/${FileSystem.path_arr.join("/")}`;
  }

  static change_dir(folder_name) {
    const current_dir = FileSystem.get_current_dir();
    if (current_dir.folders && folder_name in current_dir.folders) {
      FileSystem.path_objects.push(current_dir.folders[folder_name]);
      FileSystem.path_arr.push(folder_name);
      return true;
    }
    console.log(FileSystem.path_objects);
    return false;
  }

  static change_dir_up() {
    if (FileSystem.path_arr.length > 0) {
      FileSystem.path_arr.pop();
      FileSystem.path_objects.pop();
      return true;
    }
    return false;
  }

  static list_dir() {
    const { files, folders } = FileSystem.get_current_dir();
    return { files, folders: Object.keys(folders) };
  }

  static remove_file(file_name) {
    const current_dir = FileSystem.get_current_dir();
    if (current_dir.files) {
      if (current_dir.files.includes(file_name)) {
        const i = current_dir.files.indexOf(file_name);
        if (i > -1) {
          current_dir.files.splice(i, 1);
          // mission event
          onRemove(file_name);
          return true;
        }
      }
    }
    return false;
  }
}
export default FileSystem;
