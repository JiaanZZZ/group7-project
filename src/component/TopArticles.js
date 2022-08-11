<<<<<<< Updated upstream
import React, { useState, useEffect, useContext } from "react";
import { Grid, Container } from "@mui/material";
import Article from "./Article";
import DropdownTopArticles from "./DropdownTopArticles";

import { SearchContext } from "../context/searchContext";
=======
import React, { useState, useEffect, Fragment } from "react";
import { Grid, Container } from "@mui/material";
import Article from "./Article";
import DropdownTopArticles from "./DropdownTopArticles";
>>>>>>> Stashed changes

function TopArticles() {
  const [articles, setArticles] = useState([]);
  const [url, setUrl] = useState({
    query: "https://newsapi.org/v2/top-headlines?",
    country: "country=gb&",
    category: "category=general&",
    key: "apiKey=644c0248558246f5929da6bafb4ba056",
  });

  const changeTopArticles = () => {
    fetch(Object.values(url).join().replaceAll(",", ""))
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result.articles);
      });
  };
  useEffect(() => {
    changeTopArticles(url);
  }, []);

  const { searchTerm } = useContext(SearchContext);
  const newFilter = articles.filter((article) => {
    if (searchTerm === "") {
      return article;
    } else if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return article;
    }
  });

  if (articles.length > 0) {
    return (
      <>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <DropdownTopArticles
            url={url}
            setUrl={setUrl}
            changeTopArticles={changeTopArticles}
          />

          <Grid container spacing={4}>
            {newFilter
              .map((article, index) => {
                return <Article articleData={article} key={index} />;
              })}
          </Grid>
        </Container>
      </>
    );
  } else {
    return <div className="App">No news for you</div>;
  }
}

export default TopArticles;
