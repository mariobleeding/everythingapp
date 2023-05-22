export const Release = ({ newRelease }) => {
  return (
    <article className="p-1 rounded-lg m-1 w-full flex shadow-md hover:bg-gray-50 cursor-pointer">
      <img
        src={newRelease.images[1].url}
        alt="image-not-working"
        className="h-20 w-20 object-cover"
      />

      <div className="py-4 px-3">
        <h1 className="text-sm">{newRelease.name}</h1>
        <h1 className="text-xs text-gray-600">{newRelease.artists[0].name}</h1>
      </div>
    </article>
  );
};
