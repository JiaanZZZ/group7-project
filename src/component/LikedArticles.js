import { getDatabase, ref, child, get } from "firebase/database";

import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import Article from "./Article";

import { UserAuth } from "../context/authContext";

const LikedArticles = () => {
const [likedArticles, setLikedArticles] = useState({})
const { user } = UserAuth();

const getLikedArticles = (user) => {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${user.uid}/articles`)).then((snapshot) => {
        if (snapshot.exists()) {
        setLikedArticles(snapshot.val())
        return snapshot.val();
        } 
    }).catch((error) => {
        console.error(error);
    });
    }
    
useEffect(() => {
    getLikedArticles(user)
}, [user])


  if (Object.values(likedArticles).length > 0) {
    return (
      <>
        <Container sx={{ py: 8 }} maxWidth="lg">

          <Grid container spacing={4}>
            {Object.keys(likedArticles)
              .map((key) => {
                return <Article articleData={likedArticles[key]} index={key} key={key}/>;
              })}
          </Grid>
        </Container>
      </>
    );
  } else {
    return <Container sx={{ py: 8 }} maxWidth="lg"></Container>

  }
}

export default LikedArticles;