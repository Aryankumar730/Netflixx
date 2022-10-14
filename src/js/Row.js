import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from './axios';
import "../css/Row.css";
import { Link } from 'react-router-dom';
import preview from '../img/preview.png';
import Spinner from './Spinner';



const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {
    const [movies, setMovies] = useState([]);
   
    
    
    const [IsLoading, setIsLoading] = useState(true)

    useEffect(() => {

        async function fetchdata() {
            const request = await axios.get(props.fetchUrl)
            // console.log(request.data.results);
            setMovies(request.data.results);
            setIsLoading(false)
            return request;
        }
        fetchdata();
    }, [props.fetchUrl]);


    return (
        <>
            {
                IsLoading
                    ?
                    <div className="container">
                        
                    <Spinner/>
                    </div>
                    :
                    <div className='conatiner'>

                        <h3 id='textHeader'>{props.title}</h3>
                        
                        
                        <div className="row_poster">
                            {movies.map((element) => {
                                let image = `${base_url}${element.poster_path}`;
                                if(element.backdrop_path == null){
                                    var image1 = preview;
                                    // console.log("yessss");
                                }
                                else{
                                    image1 = `${base_url}${element.backdrop_path}`;
                                    
                                }
                                
                                return <Link to={`movie/${element.id}`}>
                                              
                                        <div className="row_cards">
                                    
                                        <img
                                            className={`row_poster1 ${props.isLargeRow && `row_posterLarge`}`}
                                            key={element.id}
                                            src={`${props.isLargeRow ? image : image1}`} alt={element.name} />
                                        </div>
                                        </Link>
                            })};
                        </div>
                        
                    </div>
            }
        </>
    )
}

export default Row
