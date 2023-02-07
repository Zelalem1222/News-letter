import React,{ useState , createContext , useEffect }  from "react";
import { newsServiceGB } from "./news-service";

export const NewsGbContext = createContext();

export const NewsGbProvider = ({children}) => {

    const [newsGB, setNewsGB] = useState([]);
    const getNewsGB = () => {
        newsServiceGB()
        .then((result) => {
            setNewsGB(result);
        })
    }


    useEffect(() => {
        getNewsGB();
    }, []);
 
    return (
        <NewsGbContext.Provider value={newsGB}>
            {children}
        </NewsGbContext.Provider>
    )
}