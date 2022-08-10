import React, { useState, useEffect, useContext, Fragment } from "react";
import { Grid, Container } from "@mui/material";
import Article from "./Article";
import DropdownTopArticles from "./DropdownTopArticles";

import { SearchContext } from "../context/searchContext";

function TopArticles() {
  const [articles, setArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState([]);
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
  const [searchUrl, setSearchUrl] = useState({
    query: "https://newsapi.org/v2/everything?",
    q: "q=summer&",
    pageSize: "pageSize=10&",
    key: "apiKey=644c0248558246f5929da6bafb4ba056",
  });

  const changeSearchArticles = () => {

    fetch(Object.values(searchUrl).join().replaceAll(",", ""))
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setSearchArticles(result.articles);
      });
  };

  useEffect(() => {
    if (searchTerm !== "") {
      let searchUrlCopy = searchUrl;
      searchUrlCopy.q = `q=${searchTerm}&`;
      //console.log(searchUrlCopy)
      changeSearchArticles(searchUrlCopy);
      setSearchUrl(searchUrlCopy);
      // console.log(searchUrl)
    }
  }, [searchTerm]);

  if (articles.length > 0 && searchTerm.length === 0) {
    return (
      <Fragment>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <DropdownTopArticles
            url={url}
            setUrl={setUrl}
            changeTopArticles={changeTopArticles}
          />

          <Grid container spacing={4}>
            {articles.map((article, index) => {
              return <Article articleData={article} key={index} />;
            })}
          </Grid>
        </Container>
      </Fragment>
    );
  } else if (searchTerm.length > 0 && searchArticles.length > 0) {
    <Fragment>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {searchArticles.map((searchArticle, index) => {
            return <Article articleData={searchArticle} key={index} />;
          })}
        </Grid>
      </Container>
    </Fragment>;
  } else {
    return (
      <div className="App">
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          No news for you
        </h1>
      </div>
    );
  }
}

export default TopArticles;
