import React, { useEffect, useState } from 'react';
import axios from './axios';
import '../css/Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function Banner(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(props.fetchUrl)
      
      setMovie(request.data.results);

      return request;

    }
    fetchData();
  }, [props.fetchUrl]);

  function truncateString(str, num) {
    if (str !== undefined) {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      }
      else {
        return str;
      }

    }
    else {
      return str;
    }
  }
  
  return (
    <div className="container_banner">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {
          movie.map(movie => (

            <Link style={{textDecoration:"none"}} to={`movie/${movie.id}`}>

              <div className="banner"
                style={{

                  backgroundSize: "cover",
                  backgroundImage: `url(
                "http://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  objectFit:"contain",

                }}
              >
                <div className="container">
                  <h2 id='title'>
                    {movie.title || movie.name || movie.original_name}
                  </h2>
                  {/* <div className="buttons">
                  <button className='button'>Play</button>
                  <button className='button'>Mylist</button>
                </div> */}

                  <div id="dateANDtime">

                    <div className="release_date">

                      {movie ? movie.release_date : "01-01-2020"}

                    </div>
                    <div className="movie_rating">
                      {movie ? movie.vote_average : "4"}
                      
                      <i class="fa-solid fa-star"></i>

                    </div>
                  </div>
                  <div className="description">

                    {truncateString(movie ? movie.overview : " ", 600)}
                  </div>


                </div>
                <div className="fadeBottom">

                </div>


              </div>
            </Link>

          ))


        }


      </Carousel >
    </div>

  );
}

export default Banner;

