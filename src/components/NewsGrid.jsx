import { useState, useEffect } from "react";

import { NewItem } from "./NewItem";
import { NewParameterSelector } from "./NewParameterSelector";

import newsAPI from "../services/newsAPI";

export const NewsGrid = () => {
  const [news, setNews] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [selectedCategory, setSelectedCategory] = useState("general");

  useEffect(() => {
    newsAPI.getNews(selectedCountry, selectedCategory).then((response) => {
      setNews(response.articles);
    });
  }, [selectedCountry, selectedCategory]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="p-1">
      <h1 className="text-xl p-1 py-3 font-title">
        <i className="fa-regular fa-newspaper font-md pr-2"></i>news
      </h1>
      <NewParameterSelector
        onChangeCountry={handleCountryChange}
        onChangeCategory={handleCategoryChange}
      />
      {news.map((el) => (
        <NewItem newItem={el} key={el.id} />
      ))}
    </div>
  );
};
