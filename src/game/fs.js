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
//-------------------------------------//
const myIP = "192.168.0.1";
class Random {
  static IP() {
    return Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 255) + 1
    ).join(".");
  }

  static username() {
    let users = ["root", "guest", "user", "admin"];
    return users[Math.floor(Math.random() * users.length)];
  }

  static logs(n = 8) {
    const formatLogFile = () => [`${this.IP()}.log`, this.username()];

    return Array.from({ length: n }, () => formatLogFile()).concat([
      [`${this.IP()}.log`, "root"],
    ]);
  }
}
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
// @loop: trying to make a loop for later (i'm struggling with `cd..`)
for (const key in dir_tree) {
  console.log(key);
  const value = dir_tree[key];
  if (value.files) {
    // @loop files
    for (const files of value.files) {
      // ...
    }
  }
  if (value.folders) {
    // @loop folders
    for (const foldersKey in value.folders) {
      const folders = value.folders[foldersKey];
      // recurse()
    }
  }
}

class GameFileSystem {
  host_name = "localhost";
  root_dir = dir_tree[this.host_name];

  setHost = (host_name) => (this.host_name = host_name);
}

export default GameFileSystem;
