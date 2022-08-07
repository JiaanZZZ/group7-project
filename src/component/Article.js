import "../app.scss";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const Article = ({ articleData, index }) => {
  const title = articleData.title;
  const author = articleData.author;
  const content = articleData.content;
  const link = articleData.url;
  let imageLink = articleData.urlToImage;
  const defaultImageLink =
    "https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";

  if (imageLink === null) {
    imageLink = defaultImageLink;
  }

  if (author) {
    return (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt={title} height="200" src={imageLink} />
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
            <Button size="small" href={link} target="_blank" rel="noreferrer">
              Read More
            </Button>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  } else {
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={title} height="140" image={imageLink} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body2" color="text.primary">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={link} target="_blank" rel="noreferrer">
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
