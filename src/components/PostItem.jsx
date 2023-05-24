import React, { useState } from "react";

export const PostItem = ({ postItem }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleImage = () => {
    setIsShow(!isShow);
  };

  return (
    <article className="p-1 rounded-lg m-1 w-full items-center flex shadow-md hover:bg-gray-50 flex flex-col">
      <div
        className="flex justify-between w-full items-center cursor-pointer"
        onClick={toggleImage}
      >
        <h1 className="text-sm p-5">{postItem.title}</h1>{" "}
        <i className="fa-solid fa-angle-down text-right px-3 text-lg"></i>
      </div>
      {isShow && postItem.url && (
        <img
          src={postItem.url}
          alt="image-not-working"
          className="w-full p-3"
        />
      )}
    </article>
  );
};
