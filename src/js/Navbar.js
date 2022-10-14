import '../css/Navbar.css';
import React from 'react';
import symbol from '../img/logo1.png';
import logo from '../img/netflix1.png';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <>

      <div className={`nav nav_black`}>

        <Link to="/">
          <img className='nav_logo'
            src={logo} alt="Nav" />
        </Link>

        <div className="nav_center">

          <Link to="/movies/TrendingNow" style={{ textDecoration: "none" }}><span>Trending Now</span></Link>
          <Link to="/movies/TopRated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
          <Link to="/movies/ActionMovies" style={{ textDecoration: "none" }}><span>Action</span></Link>
          <Link to="/movies/ComedyMovies" style={{ textDecoration: "none" }}><span>Comedy</span></Link>
          <Link to="/movies/HorrorMovies" style={{ textDecoration: "none" }}><span>Horror</span></Link>
          <Link to="/movies/LatestDocumentaries" style={{ textDecoration: "none" }}><span>Latest</span></Link>

        </div>

        <Link to="/">

          <img className='nav_avatar'
            src={symbol} alt="Logo" />
        </Link>


      </div>

    </>


  )
}

export default Navbar
