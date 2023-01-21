import React from "react"
import "./movie.css"
import { Component } from "react";


    class Movie extends Component {
    
        constructor(){
            super();
            let data=JSON.parse(localStorage.getItem('details')|| '[]');
            this.state={
                movies:data,
                movies1:[]
            };
        }


    render(){
        let genresName = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let movie = this.state.movies;

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}` } alt="img" />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster"/>
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop banner-intro cdm">
                        <div className="movie__name">{movie.original_title}</div>
                        <div className="movie__tagline">{ movie.tagline }</div>
                        <div className="movie__rating">
                            { movie.vote_average} <i className="fas fa-star" />
                            <span className="movie__voteCount">{ "(" + movie.vote_count + ") votes"}</span>
                        </div>  
                        <div className="movie__releaseDate">{"Total Collection:  " + movie.popularity +" Cr."}</div>
                        <div className="movie__releaseDate">{"Release date: " + movie.release_date}</div>
                        <div className="movie__genres">
                            {
                                movie && movie.genre_ids
                                ? 
                                movie.genre_ids.map((id) => (
                                    <><span className="movie__genre">{genresName[id]}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movie.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Movie;