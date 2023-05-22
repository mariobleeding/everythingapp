import { useEffect, useState } from "react";
import spotifyAPI from "../services/spotifyAPI";
import { Release } from "./Release";

export const ReleasesGrid = () => {
  const [newreleases, setNewreleases] = useState([]);

  useEffect(() => {
    spotifyAPI.getNewReleases().then((data) => {
      console.log(data);
      setNewreleases(data);
    });
  }, []);

  return (
    <div className="p-1">
      <h1 className="text-xl p-1 py-3 font-title">
        <i className="fa-brands fa-spotify font-md pr-2"></i>new releases
      </h1>
      {newreleases.map((album) => (
        <Release newRelease={album} key={album.id} />
      ))}
    </div>
  );
};
