import { useState, useEffect } from "react";

import { NewItem } from "./NewItem";
import { NewParameterSelector } from "./NewParameterSelector";

import newsAPI from "../services/newsAPI";

import { v4 as uuidv4 } from "uuid";

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
    <div className="p-1 col-span-2">
      <h1 className="text-xl p-1 py-3 font-title">
        <i className="fa-regular fa-newspaper font-md pr-2"></i>news
      </h1>
      <NewParameterSelector
        onChangeCountry={handleCountryChange}
        onChangeCategory={handleCategoryChange}
      />
      <div className="h-[75vh] overflow-y-scroll overflow-x-hidden">
        {news.map((el) => (
          <NewItem newItem={el} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};
