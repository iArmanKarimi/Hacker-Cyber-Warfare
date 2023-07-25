import FileSystem from "./fs.js";

const fs = new FileSystem();

// Test set host
const host_name = "www.microsoft.com";
const set_host_result = fs.set_host(host_name);
if (set_host_result !== true) {
  console.error("[ERROR] Failed to set the host name");
} else if (fs.host_name !== host_name) {
  console.error(`[ERROR] Expected host name to be ${host_name} but got ${fs.host_name}`);
} else {
  console.log("[PASS] Successfully set the host name");
}

// Test format path
if (fs.format_path() !== "/") {
  console.error("[ERROR] Failed to format the path");
} else {
  console.log("[PASS] Successfully formatted the path");
}

// Test change directory
const dir_cd = "main";
const change_dir_result = fs.change_dir(dir_cd);
if (change_dir_result !== true) {
  console.error(`[ERROR] Failed to change directory to ${dir_cd}`);
} else if (fs.format_path() !== `/${dir_cd}`) {
  console.error(`[ERROR] Expected path to be /${dir_cd} but got ${fs.format_path()}`);
} else {
  console.log(`[PASS] Successfully changed directory to ${dir_cd}`);
}

// Test change directory up
const change_dir_up_result = fs.change_dir_up();
if (change_dir_up_result !== true) {
  console.error(`[ERROR] Failed to change directory up`);
} else if (fs.format_path() !== "/") {
  console.error(`[ERROR] Expected path to be / but got ${fs.format_path()}`);
} else {
  console.log(`[PASS] Successfully changed directory up`);
}

// Test list directory
const list_dir_result = fs.list_dir();
if (typeof list_dir_result.files !== "object" || typeof list_dir_result.folders !== "object") {
  console.error(`[ERROR] Failed to list the directory`);
} else {
  console.log(`[PASS] Successfully listed the directory`);
}