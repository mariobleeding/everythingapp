import { useEffect, useState } from "react";
import redditAPI from "../services/redditAPI";
import { PostItem } from "./PostItem";

export const PostsGrid = () => {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState("mademesmile");
  const [readySubreddit, setReadySubreddit] = useState("");

  useEffect(() => {
    redditAPI.getPostsFromSubreddit(subreddit).then((data) => {
      setPosts(data);
    });
  }, [readySubreddit]);

  return (
    <div className="p-1">
      <h1 className="text-xl p-1 py-3 font-title">
        <i className="fa-regular fa-newspaper font-md pr-2"></i>reddit posts
      </h1>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="r/"
        required={true}
        onChange={(e) => setSubreddit(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setReadySubreddit(subreddit);
          }
        }}
      />
      {posts.map((el) => (
        <PostItem postItem={el} key={el.id} />
      ))}
    </div>
  );
};
