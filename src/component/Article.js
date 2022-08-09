import "../app.scss";

import * as React from "react";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const Article = ({ articleData, index }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const title = articleData.title;
  const author = articleData.author;
  const content = articleData.content;
  const url = articleData.url;
  let urlToImage = articleData.urlToImage;
  const defaultImageLink =
    "https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";

  if (urlToImage === null) {
    urlToImage = defaultImageLink;
  }

  const article = {
    title,
    author,
    content,
    url,
    urlToImage
  }

  const checkIfFavourite = () => {
    console.log(localStorage.getItem("favourites"))
    if (localStorage.getItem("favourites") !== null) {
      let storedFavorites = JSON.parse(localStorage.getItem("favourites"));
      let favouriteArticle = storedFavorites.find(
        (storedArticle) => storedArticle.url === url
      );
      favouriteArticle !== undefined ? setIsFavourite(true) : setIsFavourite(false);
    }
  };
  const addToFavourites = () => {
    if (localStorage.getItem("favourites") !== null) {
      let storedFavorites = JSON.parse(localStorage.getItem("favourites"));

      storedFavorites.push(article);
      localStorage.setItem("favourites", JSON.stringify(storedFavorites))
    } else {
      localStorage.setItem("favourites", JSON.stringify([article]));
    }
  };

  const removeFromFavourites = () => {
    let storedFavorites = JSON.parse(localStorage.getItem("favourites"));
    storedFavorites.splice(
      storedFavorites.findIndex(
        (storedArticle) => storedArticle.url === url
      ),
      1
    );
    localStorage.setItem("favourites", JSON.stringify(storedFavorites));
  };

  const toggleFavourite = (e) => {
    e.preventDefault();
    setIsFavourite(!isFavourite);
    isFavourite ? removeFromFavourites() : addToFavourites();
  };

  useEffect(() => checkIfFavourite(), []);


  if (author) {
    return (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt={title} height="200" src={urlToImage} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={url} target="_blank" rel="noreferrer">
              Read More
            </Button>
            <IconButton aria-label="add to favorites" onClick={(e) => toggleFavourite(e)}>
              {isFavourite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  } else {
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={title} height="140" image={urlToImage} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.primary">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={url} target="_blank" rel="noreferrer">
            Read More
          </Button>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>;
  }
};

export default Article;
