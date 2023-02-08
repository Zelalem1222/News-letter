import React , {useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { NewsGbContext } from "../services/news-service/news-context-gb";
import { NewsUsContext } from "../services/news-service/news-context-us";

import './article-detail.css'

export const ArticleDetail = () => {
     
    const { title } = useParams();
    
    
    const newsGB = useContext(NewsGbContext);
    const newsUS = useContext(NewsUsContext);
    const news = newsGB.concat(newsUS);
    const article = news.find((article) => article.title === title);

    const { description , urlToImage} = article;
    return (
        <>
        <div class="card">
        <div class="card-body">
          <h3 class="card-title">{article.title}</h3>
          <img src={urlToImage} class="card-img-top card-img" alt="..."/>
          <h5 class="card-text">{description}</h5>
        </div>
        
      
      </div>
        <Link to="/" className="btn btn-primary button">
        <button type="button" class="btn btn-primary ">Back to list</button>
        </Link>
    </>
    );
    }