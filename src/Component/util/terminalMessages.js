export const bash = {
  errors: {
    cd: "System cannot find the path specified because it does not exist.",
    cdUp: "Cannot go up from root directory.",
    del: "Cannot find file",
    unrecognized: (cmd) =>
      `'${cmd}' is not recognized as a command or program.`,
  },
  info: {
    del: (file_name) => `Successfully deleted '${file_name}'`,
  },
};
