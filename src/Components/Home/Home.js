import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import bg from "../../assets/bg.jpg";
import "./Home.css";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { Link, useNavigate } from "react-router-dom";
import Genres from "../Genres/Genres";
import Rating from "../Rating/Rating";


const Home = ({ movie }) => {
  const navigate = useNavigate();
  const handelClick = (e, id) => {
    e.preventDefault();
    navigate("/movie/" + id);
  };
  return (
    <div className="home-container">
      <header className="home-page-nav">
        <Navbar />
      </header>
      <h1 className="top-movie">Top Movies</h1>
      <div className="movies">
        {movie.map((x) => {
          return (
            <div
              onClick={(e) => handelClick(e, x.show.id)}
              className="movie-container"
              key={x.show.id}
            >
              <div className="img-container">
                <img src={x.show.image.original} alt="img"></img>
                <div className="button-div">
                <Genres genre={x}/>
                </div>
                

                {x.show.rating.average !== null ? (
                  <div className="circleRating">
                    <Rating rate={x}/>
                  </div>
                  
                ) : (
                  ""
                )}
              </div>
              <h2 className="movie-title">{x.show.name}</h2>
              <p className="movie-date">{x.show.premiered.slice(0, 4)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Home };
