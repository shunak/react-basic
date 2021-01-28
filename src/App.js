import logo from "./logo.svg";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
// import Basic2 from "./components/Basic2";
// import BasicuseEffect from "./components/BasicuseEffect";
// import TimerContainer from './components/TimerContainer'
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";
import CompB from "./components/CompB";

import { useReducer } from "react";
import Memo from "./components/Memo";
const initialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "add_1":
      return currentState + 1;
    case "multiple_3":
      return currentState * 3;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic2 /> */}
          {/* <BasicuseEffect/> */}
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          {/* <CompB /> */}
          <Memo />

        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
