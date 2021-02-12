import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div className="articles" data-uk-grid="true">
      {articles.map((article, i) => {
        return (
          <Card
            article={article}
            key={`article__${article.node.slug}`}
          />
        );
      })}
    </div>
  );
};

export default Articles;