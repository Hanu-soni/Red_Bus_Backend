import React from "react";
import { Routes, Route } from "react-router-dom";
import TestPage from "./Page/testPage";
import Page1 from "./Page/Page1";
import Card2 from "./Components/Card2";
// Make sure the import path is correct

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Page1/>} />
        <Route path="/test" element={< Card2/>} />
        {/* Page 1 Components */}
       
        

      </Routes>
    </div>
  );
}

export default App;
