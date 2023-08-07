import "./css/DirectoryList.css";
import propTypes from "prop-types";
import DivYellow from './common/ColoredDiv'

function DirectoryList({ folders, files }) {
  const file_jsx = folders.map(
    (file, i) => <div key={i}>{file}</div>
  );
  const folder_jsx = files.map(
    (folderName, i) => <DivYellow key={i}>{folderName}</DivYellow>
  );
  return (
    <div className="dir-list">
      {folder_jsx}
      {file_jsx}
    </div>
  );
}

DirectoryList.propTypes = {
  files: propTypes.array,
  folders: propTypes.object,
};

export default DirectoryList;
