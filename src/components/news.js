import React from "react";
import { Link } from "react-router-dom";


export const News = ({ article }) => {
    const { title , urlToImage , description } = article;
    return (
        <div className="col mb-4">
        <div className="card">
       <img className="card-img-top" src={urlToImage} alt={title} />
       <div className="card-body">
         <Link to={`/article/${title}`} className="btn btn-primary">
       <h5 className="card-title">{title}</h5>
       </Link>
       <p className="card-text">{description}</p>
       </div>
       </div>
     </div>
    )
}