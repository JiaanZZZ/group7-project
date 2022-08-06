import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Article from './Article';
import DropdownTopArticles from './DropdownTopArticles';

function TopArticles() {
  const [articles, setArticles] = useState([]);

  let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=644c0248558246f5929da6bafb4ba056';

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        setArticles(result.articles)
      })

  }, []);


  if (articles.length > 0) {
    return (
      <>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <DropdownTopArticles />

          <Grid container spacing={4}>
            {articles.map((article, index) => {
              return <Article articleData={article} key={index} />;
            })}
          </Grid>
        </Container>
      </>
    )
  } else {
    return <div className="App">No news for you</div>
  }
}

export default TopArticles;
