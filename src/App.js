import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    /*BEM convention*/
    <div className="app">
      <div className="app_body">
        <Router>
          <Routes>
            <Route path="/" element={<Sidebar />} />
            {/* <Route path="/app" element={<Chat />} />  */}
            {<Route path="/rooms/:roomId" element={[<Chat />]} />}
            {/* </Routes></Route> */}
            <Route path="/" element={[<Chat />]} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
