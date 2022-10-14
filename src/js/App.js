import React from 'react';
import '../css/App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';
import List from './List';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Description from './Description';

function App() {

  
  return (
    <>
      <BrowserRouter>

        <div className="App">
          <Routes>
            <Route path="/"
              element={<><Navbar />
                <Banner fetchUrl={requests.fetchActionMovies} />

                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchcomedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Latest Documentaries" fetchUrl={requests.fetchDocumentaries} /></>} />

            <Route path="movie/:id"
            element={<><Navbar /><Description/></>} />

            <Route path="movies/NETFLIX20ORIGINALS"
            element={<><Navbar /><List title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/></>} />
            <Route path="movies/TrendingNow"
            element={<><Navbar /><List title="Trending Now" fetchUrl={requests.fetchTrending}/></>} />

            <Route path="movies/TopRated"
            element={<><Navbar /><List title="Top Rated" fetchUrl={requests.fetchTopRated}/></>} />

            <Route path="movies/ActionMovies"
            element={<><Navbar /><List title="Action Movies" fetchUrl={requests.fetchActionMovies}/></>} />

            <Route path="movies/ComedyMovies"
            element={<><Navbar /><List title="Comedy Movies" fetchUrl={requests.fetchcomedyMovies}/></>} />

            <Route path="movies/HorrorMovies"
            element={<><Navbar /><List title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/></>} />

            <Route path="movies/RomanticMovies"
            element={<><Navbar /><List title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/></>} />

            <Route path="movies/LatestDocumentaries"
            element={<><Navbar /><List title="Latest Documentaries" fetchUrl={requests.fetchDocumentaries}/></>} />

          </Routes>
        </div>

      </BrowserRouter>


    </>
  );
};

export default App;
