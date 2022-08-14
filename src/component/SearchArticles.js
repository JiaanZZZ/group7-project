import React, { useState, useContext, Fragment } from "react";
import { Grid, Container } from "@mui/material";
import Article from "./Article";
import { SearchContext } from "../context/searchContext";

function TopArticles() {
  const { searchTerm, searchArticles } = useContext(SearchContext);

  if (searchArticles.length > 0) {
    return (
      <Fragment>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {searchArticles.map((searchArticle, index) => {
              return <Article articleData={searchArticle} key={index} />;
            })}
          </Grid>
        </Container>
      </Fragment>
    );
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
          No articles found.
        </h1>
      </div>
    );
  }
}

export default TopArticles;