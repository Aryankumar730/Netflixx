import React, { useEffect, useState } from "react";
import "../css/List.css";
import Card from "./Card";
import Spinner from './Spinner';


export default function List(props) {

    const [movieList, setMovieList] = useState([])
    const [IsLoading, setIsLoading] = useState(true)

    let api_call = "https://api.themoviedb.org/3"

    useEffect(() => {

        function fetchdata() {

            fetch(`${api_call}${props.fetchUrl}`).then((response) => {
                // console.log(response);
                return response.json();

            })
                .then((data) => {
                    // console.log(data.results);
                    setMovieList(data.results);
                    
                })
                .catch((error) => {
                    console.log("we are facing a error");
                })

        }
        fetchdata();
    }, [props.fetchUrl]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 


    return (
        <>
            {
                IsLoading
                    ?
                    <Spinner />
                    :
                    <div className="movie__list">
                        <h2 className="list__title">{(`${props.title}`).toUpperCase()}</h2>
                        <div className="list__cards">
                            {
                                movieList.map(element => (
                                    <Card image={element.poster_path} title={element.original_title} rating={element.vote_average} overview={element.overview} date={element.release_date
                                    } id={element.id} />
                                ))
                            }
                        </div>
                    </div>


            }

        </>
    )
}


