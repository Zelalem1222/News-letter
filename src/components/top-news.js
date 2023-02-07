import React , {useContext} from "react";
import { NewsGbContext } from "../services/news-service/news-context-gb";
import { NewsUsContext } from "../services/news-service/news-context-us";


export const TopNews = ({country}) => {
  
     const newsGB = useContext(NewsGbContext);
     const newsUS = useContext(NewsUsContext);
     const news = country === 'gb' ? newsGB : newsUS;


    return (
        <>
       {!country && <h1>Choose a country</h1>}
        <div className="row row-cols-1 row-cols-md-3">
  
          {country && news.map((article , index) => {
          return (
            <div className="col mb-4" key={index}>
               <div className="card">
              <img className="card-img-top" src={article.urlToImage} alt={article.title} />
              <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              </div>
              </div>
            </div>
          )
       }
        )}
        </div>
        </>
    )
}