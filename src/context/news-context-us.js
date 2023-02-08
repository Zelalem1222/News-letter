import React,{ useState , createContext , useEffect }  from "react";
import {  newsServiceUS } from "../services/news-service/news-service";

export const NewsUsContext = createContext();

export const NewsUsProvider = ({children}) => {

    const [newsUS, setNewsUS] = useState([]);
   
    const getNewsUS = () => {
        newsServiceUS()
        .then((result) => {
            setNewsUS(result);
        });
    }

    useEffect(() => {
        getNewsUS();
    }, []);
 
    return (
        <NewsUsContext.Provider value={newsUS}>
            {children}
        </NewsUsContext.Provider>
    )
}