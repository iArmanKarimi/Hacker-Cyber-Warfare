import "./css/App.css";
import GUI from "./GUI";
import Terminal from "./Terminal";

const App = () => (
  <>
    <main id="game">
      <Terminal />
      <GUI />
    </main>
  </>
);

export default App;
