import React , {useContext} from "react";
import { NewsGbContext } from "../context/news-context-gb";
import { NewsUsContext } from "../context/news-context-us";
import { News } from "./news";

export const TopNews = ({ country }) => {
  
     const newsGB = useContext(NewsGbContext);
     const newsUS = useContext(NewsUsContext);
     const countryCode = country || localStorage.getItem('country');
     const news = countryCode === 'gb' ? newsGB : newsUS;


    return (
        <>
        <h1> {country.toUpperCase()} News  </h1>
       {!country && <h1>Choose a country</h1>}
        <div className="row row-cols-1 row-cols-md-3">
            
          {country && news.map((article , index) => {
              
          return (
           <News article={article} key={index} />
          )
       }
        )}
        </div>
        </>
    )
}