import { useState } from "react";
import { PostItemInfo } from "./PostItemInfo";

export const PostItem = ({ postItem }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleImage = () => {
    setIsShow(!isShow);
  };

  return (
    <article className="rounded-lg p-1 m-2 items-center flex shadow-md hover:bg-gray-50 hover:shadow-lg flex-col">
      <div
        className="flex justify-between w-full items-center cursor-pointer"
        onClick={toggleImage}
      >
        <h1 className="text-sm p-5">{postItem.title}</h1>{" "}
        <i className="fa-solid fa-angle-down text-right px-3 text-lg"></i>
      </div>
      {isShow && <PostItemInfo item={postItem} />}
    </article>
  );
};
