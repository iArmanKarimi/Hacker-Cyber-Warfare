import { Component } from "react";
import "./css/DirList.css";

class DirList extends Component {
  render() {
    // example
    const files = ["file1", "file2"];
    const folders = ["folder1", "folder2"];
    const file_jsx = folders.map((file, i) => <div key={i}>{file}</div>);
    const folder_jsx = files.map((folder, i) => (
      <div style={{ color: "yellow" }} key={i}>
        {folder}
      </div>
    ));
    return (
      <div className="dir-list">
        {folder_jsx}
        {file_jsx}
      </div>
    );
  }
}

export default DirList;
