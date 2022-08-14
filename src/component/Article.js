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

import { getDatabase, ref, child, get, set, push, remove } from "firebase/database";
import { UserAuth } from "../context/authContext";

const Article = ({ index, articleData }) => {
  const [isLiked, setIsLiked] = useState(false);

  const title = articleData.title;
  const author = articleData.author;
  const description = articleData.description;
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
    description,
    url,
    urlToImage
  }
  const { user } = UserAuth();


  const checkIfLiked = () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${user.uid}/articles`)).then((snapshot) => {
        if (snapshot.exists()) {
          const storedArticles = snapshot.val()
            let likedArticle = Object.values(storedArticles).find(
              (storedArticle) => storedArticle.url === url
            );
          
            
            likedArticle !== undefined ? setIsLiked(true) : setIsLiked(false);
          } else {
            setIsLiked(false)
          }
      }).catch((error) => {
        console.error(error);
      })
  }

    const addToLikedArticles = () => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}/articles`)).then(() => {
            const db = getDatabase();
            const userRef = ref(db, 'users/' + user.uid + '/articles');
            const newArticleRef = push(userRef);
            set(newArticleRef, article);
            setIsLiked(true)
      }).catch((error) => {
        console.error(error);
      });

    }
    const removeFromLikedArticles = () => {
      const db = getDatabase();
      remove(ref(db, `users/${user.uid}/articles/${index}`));
      setIsLiked(false)
  };
  
    const toggleFavourite = (e) => {
      e.preventDefault();
      setIsLiked(!isLiked);
      isLiked ? removeFromLikedArticles() : addToLikedArticles();
    };
  
    useEffect(() => checkIfLiked(), []);
  
  if (author) {
    return (
      
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt={title} height="200" src={urlToImage} className='articleImage'/>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className='title'>
              {title}
              
            </Typography>
            <Typography variant="body1" color="text.secondary" className='author'>
              {author}
            </Typography>
            <Typography variant="body2" color="text.primary" className='description'>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={url} target="_blank" rel="noreferrer" className='url'>
              Read More
            </Button>
            <IconButton aria-label="add to favorites" onClick={(e) => toggleFavourite(e)}>
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  } else {
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={title} height="140" image={urlToImage} className='articleImage'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='title'>
            {title}
          </Typography>

          <Typography variant="body2" color="text.primary" className='description'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={url} target="_blank" rel="noreferrer" className='url'>
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
