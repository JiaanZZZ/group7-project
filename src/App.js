import React, { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import { Routes, Route } from "react-router-dom";
import TopArticles from "./component/TopArticles";
import { AuthContextProvider } from "./context/authContext";
import Signin from "./component/Signin";
import SearchArticles from './component/SearchArticles'

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Signin />} />
          <Route path="/topArticles" element={<TopArticles />} />
          <Route path="/searchArticles" element={<SearchArticles />} />
          <Route path="/likedNews" element={<TopArticles />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
