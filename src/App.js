import React, { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import { Routes, Route } from "react-router-dom";
import TopArticles from "./component/TopArticles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<TopArticles />} />
        <Route path="/likedNews" element={<TopArticles />} /> 
        
  
      </Route>
    </Routes>
  );
}

export default App;
