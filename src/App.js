import Navigation from "./component/Navigation";
import { Routes, Route } from "react-router-dom";
import TopArticles from "./component/TopArticles";
import FavouriteArticles from "./component/FavouriteArticles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<TopArticles />} />
        <Route path="/likedNews" element={<FavouriteArticles />} />


      </Route>
    </Routes>
  );
}

export default App;
