import propTypes from "prop-types";

export function DirList(props) {
	const file_jsx = props.folders.map((file, i) => <div key={i}>{file}</div>);
	const folder_jsx = props.files.map((folder, i) => (
		<div style={{ color: "yellow" }} key={i}>
			{folder}
		</div>
	));
	const style = {
		display: "grid",
		"grid-template-columns": "1fr 1fr 1fr 1fr",
		"grid-auto-rows": "auto"
	};
	return (
		<div style={style}>
			{folder_jsx}
			{file_jsx}
		</div>
	);
}
DirList.propTypes = {
	files: propTypes.array,
	folders: propTypes.object,
};
