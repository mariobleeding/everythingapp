export const NewItem = ({ newItem }) => {
  return (
    <article className="p-1 rounded-lg m-1 w-full flex justify-center items-center shadow-md hover:shadow-lg hover:bg-gray-50 cursor-pointer">
      {newItem.urlToImage && (
        <img
          src={newItem.urlToImage}
          alt="image-not-working"
          className="h-16 w-16 object-cover"
        />
      )}
      <h1 className="text-sm p-5">
        {newItem.title.split(" ").slice(0, 18).join(" ")}...
      </h1>
    </article>
  );
};
