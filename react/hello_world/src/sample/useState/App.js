import logo from "../../logo.svg";
import "../../App.css";

import UseState01 from "./useState01";
import UseState02 from "./useState02";
import UseState03 from "./useState03";
import UseState04 from "./useState04";
import UseState05 from "./useState05";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <UseState01 />
        <br />
        <UseState02 />
        <br />
        <UseState03 />
        <br />
        <UseState04 />
        <br />
        <UseState05 />
      </header>
    </div>
  );
}

export default App;
