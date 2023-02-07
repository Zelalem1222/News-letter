import React , {useContext , useState} from "react";
import { NewsGbContext } from "../services/news-service/news-context-gb";
import { NewsUsContext } from "../services/news-service/news-context-us";
import './search.css'


export const Search = ({country}) => {
    const newsGB = useContext(NewsGbContext);
    const newsUS = useContext(NewsUsContext);
    const [searchTerm , setSearchTerm] = useState("");
    const news = newsGB.concat(newsUS);
 
    return (
        <>
        <h3>Search top news by the title</h3>
        <input type="text" placeholder="Search" onChange={e => {setSearchTerm(e.target.value)}}/>
        <div className="row row-cols-1 row-cols-md-3">
           
          {news.filter((article) => {
            if (searchTerm === "") {
                return null
            } else if (article.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return article
            }
          }).map((article , index) => {
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