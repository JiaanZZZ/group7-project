import './app.scss';
import React, { useState, useEffect } from 'react';

import Article from './Article';
  
function App() {
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


  if(articles.length > 0){
    return (
      <div className="mdc-image-list my-image-list">
        {articles.map((article, index) => {
                return <Article articleData={article} key={index} />;
              })}
      </div>
    )} else {
      return <div className="App">No news for you</div>
    }
}

export default App;
