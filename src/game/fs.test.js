import FileSystem from "./fs.js";

const fs = new FileSystem();

console.log("[change server]", fs.set_host("www.microsoft.com"));
const dir_cd = "main";
console.log("[path]", fs.format_path() === "/");
console.log("[cd]", fs.change_dir(dir_cd));
console.log("[path]", fs.format_path() === "/" + dir_cd);
console.log("current dir:", fs.change_dir_up());
console.log("[path]", fs.format_path() === "/");
console.log(
  "[ls]",
  typeof fs.list_dir().files === "object" &&
    typeof fs.list_dir().folders === "object"
);
