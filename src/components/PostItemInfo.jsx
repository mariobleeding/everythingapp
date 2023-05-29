const isImageURL = (url) => {
  const imageExtensions = /\.(jpg|jpeg|gif|png|bmp|svg)$/i;
  return imageExtensions.test(url);
};

export const PostItemInfo = ({ item }) => {
  return (
    <div>
      {isImageURL(item.url) ? (
        <img src={item.url} alt="image-not-working" className="w-full p-3" />
      ) : (
        <a className="text-xs text-gray-600 p-2" href={item.url}>
          Not contains image
        </a>
      )}
      <ul className="text-xs flex py-1 px-2">
        <li
          className={` ${
            !item.over_18 ? "hidden" : ""
          } border-2 border-red-400 bg-red-300 p-1 rounded-lg mr-2`}
        >
          <i className="fa-solid fa-ban pr-1"></i>+18
        </li>
        <li className="border-2 border-blue-400 bg-blue-300 p-1 rounded-lg mr-2">
          <i className="fa-solid fa-thumbs-up pr-1"></i>
          {item.score}
        </li>
        <li className="border-2 border-green-400 bg-green-300 p-1 rounded-lg mr-2">
          <i className="fa-solid fa-seedling pr-1"></i>
          {item.upvote_ratio}
        </li>
        <li className="border-2 border-gray-400 bg-gray-300 p-1 rounded-lg">
          <i className="fa-solid fa-arrow-up-right-from-square pr-1"></i>
          <a href={item.url}>Visit</a>
        </li>
      </ul>
      <p className="text-sm text-gray-700 p-2">{item.selftext}</p>
    </div>
  );
};
