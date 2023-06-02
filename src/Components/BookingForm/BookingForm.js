import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookingForm.css";
import Genres from "../Genres/Genres";
import Navbar from "../Navbar/Navbar";

const BookingForm = ({ movie }) => {
  const { id, name } = useParams();

  const [singleMovie, setSinglemovie] = useState({});

  useEffect(() => {
    movie.find((x) => {
      if (x.show.id === parseInt(id)) {
        setSinglemovie((singleMovie) => ({ ...singleMovie, ...x }));
      }
    });
  }, [movie]);

  return (
    <div className="booking-container">
      <Navbar />
      <div className="booking">
        <div className="booking-form-div">
          <div className="booking-form-img">
            <div className="booking-img-div">
              <img src={singleMovie?.show?.image?.original} />
            </div>

            <div className="booking-img-detail">
              <h1>{singleMovie?.show?.name}</h1>
              <h2>
                Time : <span>{singleMovie?.show?.schedule?.time}</span>
              </h2>
              <Genres genre={singleMovie} />
            </div>
          </div>
          <form className="booking-form">
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="password" placeholder="Password" />
            <div>
              <button>Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
