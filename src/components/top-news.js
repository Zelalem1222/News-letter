import React , {useContext} from "react";
import { NewsGbContext } from "../services/news-service/news-context-gb";
import { NewsUsContext } from "../services/news-service/news-context-us";
import { News } from "./news";

export const TopNews = ({ country }) => {
  
     const newsGB = useContext(NewsGbContext);
     const newsUS = useContext(NewsUsContext);
     const news = country === 'gb' ? newsGB : newsUS;


    return (
        <>
       {!country && <h1>Choose a country</h1>}
        <div className="row row-cols-1 row-cols-md-3">
  
          {country && news.map((article , index) => {
          return (
           <News article={article} key={index}/>
          )
       }
        )}
        </div>
        </>
    )
}