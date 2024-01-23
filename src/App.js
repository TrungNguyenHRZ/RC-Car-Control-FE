import React from "react";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="flex">
      <div className="basis-[17%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border"></div>
    </div>
  );
}

export default App;
