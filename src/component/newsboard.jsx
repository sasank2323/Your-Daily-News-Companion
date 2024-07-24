import { useEffect } from "react";
import {useState} from "react";
import Newsitem from "./newsitem";

const Newsboard = ({cat}) => {
  const [articles, setArticles] = useState([{title:"sasank",description:"make a impact",src:"https://www.codewithharry.com/",url:"https://www.codewithharry.com/"}])
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=63e7a801f58e499f9548a01185fca5e0`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [cat]);

  return (
    <div>
      <h1 className="text-center">
        LATEST <span className="badge bg-danger">news</span>
      </h1>
      {articles.map((news, index) => (
        <Newsitem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default Newsboard;
