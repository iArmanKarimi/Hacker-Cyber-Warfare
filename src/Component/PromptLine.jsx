import "./css/PromptLine.css";

export default function PromptLine() {
  return (
    <div id="prompt-line">
      <span id="prompt-line-prompt">Login:</span>
      <input type="text" id="prompt-line-input" autoFocus />
    </div>
  );
}
