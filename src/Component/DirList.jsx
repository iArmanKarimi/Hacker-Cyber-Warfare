import "./css/DirList.css";
import propTypes from "prop-types";

function DirList(props) {
  const file_jsx = props.folders.map((file, i) => <div key={i}>{file}</div>);
  const folder_jsx = props.files.map((folder, i) => (
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

DirList.propTypes = {
  files: propTypes.array,
  folders: propTypes.object,
};

export default DirList;
