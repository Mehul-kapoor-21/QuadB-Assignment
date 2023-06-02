import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import "./SingleMovie.css";
import Genres from "../Genres/Genres";
import Rating from "../Rating/Rating";

const SingleMovie = ({ movie }) => {
  const { id } = useParams();
  const [singleMovie, setSinglemovie] = useState({});

  const navigate = useNavigate();
  const handleClick = (e, id, name) => {
    e.preventDefault();
    navigate("/movie/" + `${id}/` + name);
  };

  useEffect(() => {
    movie.find((x) => {
      if (x.show.id === parseInt(id)) {
        setSinglemovie((singleMovie) => ({ ...singleMovie, ...x }));
      }
    });
  }, [movie]);

  return (
    <div className="single-movie-page">
      <Navbar />
      <div className="bg-img-container">
        <div className="image-container">
          <img src={singleMovie?.show?.image?.original} alt="img" />
        </div>
        <div className="detail-container">
          <h1 className="title">{singleMovie?.show?.name}</h1>
          <Genres genre={singleMovie} />
          {singleMovie?.show?.rating?.average !== null ? (
            <div className="rating">
              <Rating rate={singleMovie} />
            </div>
          ) : (
            ""
          )}

          <h3 className="overview">Overview</h3>
          <div
            dangerouslySetInnerHTML={{ __html: singleMovie?.show?.summary }}
          />

          <div className="info">
            <h2>
              Status : <span>{singleMovie?.show?.status}</span>
            </h2>
            <h2>
              Release Date : <span>{singleMovie?.show?.premiered}</span>
            </h2>
            <h2>
              RunTime : <span>{singleMovie?.show?.runtime}</span>
            </h2>
          </div>
          <hr></hr>
          <div className="info">
            <h2>
              Language : <span>{singleMovie?.show?.language}</span>
            </h2>
            <h2>
              Average Runtime : <span>{singleMovie?.show?.averageRuntime}</span>
            </h2>
            <h2>
              Schedule Time : <span>{singleMovie?.show?.schedule?.time}</span>
            </h2>
          </div>
          <hr></hr>

          <div className="book-now-div">
            <button
              className="book-now-btn"
              onClick={(e) => handleClick(e, singleMovie?.show?.id,singleMovie?.show?.name)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
