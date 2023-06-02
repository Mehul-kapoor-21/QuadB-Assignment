import { React,useEffect, useState } from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import SingleMovie from "./Components/SingleMovie/SingleMovie";
import BookingForm from "./Components/BookingForm/BookingForm";


const API = "https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getMovie = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    getMovie(API);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home movie={movie} />} />
          <Route path="/movie/:id" element={<SingleMovie movie={movie} />} />
          <Route path="/movie/:id/:name" element={<BookingForm movie={movie} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
