import '../app.scss'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Article = ( articleData, index ) => {
  articleData= articleData.articleData;
    const title = articleData.title
    const author = articleData.author
    const content = articleData.content
    const link = articleData.url
    const imageLink = articleData.urlToImage

    

  return (
    <Grid item key={index} xs={12} sm={6} md={4}>

    <Card  sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt={title}
      height="140"
      image={imageLink}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Author: {author}
      </Typography>
      <Typography variant="body2" color="text.primary">
        {content}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={link} target="_blank" rel="noreferrer">Read More</Button>
    </CardActions>
  </Card>
  </Grid>
  );
};

export default Article;
