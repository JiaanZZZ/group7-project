import React, { useState, useEffect, useContext } from "react";
import { Grid, Container } from "@mui/material";
import Article from "./Article";
import DropdownTopArticles from "./DropdownTopArticles";

import { SearchContext } from "../context/searchContext";

const FavouriteArticles = () => {


  if (JSON.parse(localStorage.getItem("favourites")) === null) {
    localStorage.setItem("favourites", JSON.stringify([]));
  }
  const articles = JSON.parse(localStorage.getItem("favourites"));

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
    return <Container sx={{ py: 8 }} maxWidth="lg"></Container>

  }
}

export default FavouriteArticles;
