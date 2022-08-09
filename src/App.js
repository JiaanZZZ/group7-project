import React, { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import { Routes, Route } from "react-router-dom";
import TopArticles from "./component/TopArticles";
import Auth from "./component/Signin";
import { AuthContextProvider } from "./context/authContext";
import Signin from "./component/Signin";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Signin />} />
          <Route path="/topArticles" element={<TopArticles />} />
          <Route path="/likedArticles" element={<TopArticles />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
