import React, { useState, useEffect } from "react";

const Article = () => {
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  /* useEffect(() => {
    setArticles(articles.reverse());
  }, [articles]); */

  /* const handleChange = (event) => {
    setArticle(event.target.value);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    setArticles([...articles, article]);
    setArticle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <ul>
        {articles.map((e) => (
          <h1>{e}</h1>
        ))}
      </ul>
    </div>
  );
};

export default Article;
