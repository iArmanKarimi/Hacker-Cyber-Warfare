import fs from "./fs.js";

// Test set host
function set_host() {
  const host_name = "www.microsoft.com";
  const set_host_result = fs.set_host(host_name);
  if (set_host_result !== true) {
    console.error("[ERROR] Failed to set the host name");
  } else if (fs.host_name !== host_name) {
    console.error(
      `[ERROR] Expected host name to be ${host_name} but got ${fs.host_name}`
    );
  } else {
    console.log("[PASS] Successfully set the host name");
  }
}

// Test format path
function format_path() {
  if (fs.format_path() !== "/") {
    console.error("[ERROR] Failed to format the path");
  } else {
    console.log("[PASS] Successfully formatted the path");
  }
}

// Test change directory
function change_dir() {
  const dir_cd = "main";
  const change_dir_result = fs.change_dir(dir_cd);
  if (change_dir_result !== true) {
    console.error(`[ERROR] Failed to change directory to ${dir_cd}`);
  } else if (fs.format_path() !== `/${dir_cd}`) {
    console.error(
      `[ERROR] Expected path to be /${dir_cd} but got ${fs.format_path()}`
    );
  } else {
    console.log(`[PASS] Successfully changed directory to ${dir_cd}`);
  }
}

// Test change directory up
function change_dir_up() {
  const change_dir_up_result = fs.change_dir_up();
  if (change_dir_up_result !== true) {
    console.error(`[ERROR] Failed to change directory up`);
  } else if (fs.format_path() !== "/") {
    console.error(`[ERROR] Expected path to be / but got ${fs.format_path()}`);
  } else {
    console.log(`[PASS] Successfully changed directory up`);
  }
}

// Test list directory
function list_directory() {
  const list_dir_result = fs.list_dir();
  if (
    typeof list_dir_result.files !== "object" ||
    typeof list_dir_result.folders !== "object"
  ) {
    console.error(`[ERROR] Failed to list the directory`);
  } else {
    console.log(`[PASS] Successfully listed the directory`);
  }
}

// Test remove file
function remove_file() {
  const files = fs.get_current_dir().files;
  const initialFilesLength = files.length;

  // Remove the file and check if it returns true
  const isFileRemoved = fs.remove_file(".temp");

  // Check if the number of files in the directory has decreased by 1
  const isFileCountDecreased = files.length === initialFilesLength - 1;

  // Log the results of the test
  console.log(
    `[${isFileCountDecreased && isFileRemoved ? "PASS" : "FAIL"}] Delete file`
  );
}

// Run tests
set_host();
format_path();
change_dir();
change_dir_up();
list_directory();
remove_file();
