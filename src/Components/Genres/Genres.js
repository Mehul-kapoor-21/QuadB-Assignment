import React from "react";
import "./Genres.css";
const Genres = ({ genre }) => {
  return (
    <div >
      {genre?.show?.genres?.slice(0, 2).map((y) => {
        return <button>{y}</button>;
      })}
    </div>
  );
};

export default Genres;
