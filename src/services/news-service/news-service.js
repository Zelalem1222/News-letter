
const URLGB = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=feb76072499c471bb393ecfffa980f47';
const URLUS = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=feb76072499c471bb393ecfffa980f47';

export const newsServiceGB = async () => {
    try {
         const response = await fetch(URLGB);
         const result_1 = await response.json();
         return newsServiceGBTransform(result_1);
     } catch (error) {
         return console.log(error);
     }
}

export const newsServiceUS = async () => {
    try {
         const response = await fetch(URLUS);
         const result_1 = await response.json();
         return newsServiceGBTransform(result_1);
     } catch (error) {
         return console.log(error);
     }
}

export const newsServiceGBTransform = (result) => {
    const response = result.articles;
    const transformedResult = response.map((article) => {
        return {
            id: article.source.name,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            content: article.content
        }
    });
    return transformedResult;
}


