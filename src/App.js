import logo from "./logo.svg";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
// import Basic2 from "./components/Basic2";
// import BasicuseEffect from "./components/BasicuseEffect";
// import TimerContainer from './components/TimerContainer'
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";

function App() {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 /> */}
          {/* <BasicuseEffect/> */}
          {/* <TimerContainer /> */}
          <ApiFetch />
          <B />
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
