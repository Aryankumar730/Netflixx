import React from "react";
import "../css/Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {

    let api_call = "https://image.tmdb.org/t/p/original";

    return (
        <>


            <div className="card_container">

                <Link to={`/movie/${props.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        <img className="cards__img" src={`${api_call}${props.image ? props.image : ""}`} alt="Nothing" />
                        <div className="cards__overlay">
                            <div className="card__title">{props.title ? props.title : ""}</div>
                            <div className="card__runtime">
                                <span className="card__date">

                                    {props.date ? props.date : ""}
                                </span>
                                <span className="card__rating">{props.rating ? props.rating : ""}
                                    <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="card__description">{props.overview ? props.overview.slice(0, 100) + "..." : ""}</div>
                        </div>
                    </div>
                </Link>

            </div>

        </>
    )
}

