import logo from "./logo.svg";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
// import Basic2 from "./components/Basic2";
// import BasicuseEffect from "./components/BasicuseEffect";
// import TimerContainer from './components/TimerContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 /> */}
        {/* <BasicuseEffect/> */}
        {/* <TimerContainer /> */}
        <ApiFetch />
      </header>
    </div>
  );
}

export default App;
