import { Component } from "react";
import {movies} from "../movieData";

class Banner extends Component {
    render() {
        let random = Math.floor(Math.random() * 10) ;
        let movie = movies.results[random];
        let backdrop_path = movie.backdrop_path;
        let movie1 = movies.results[random+4];
        let backdrop_path1 = movie1.backdrop_path;
        let movie2 = movies.results[random+5];
        let backdrop_path2 = movie2.backdrop_path;

        return (
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100 banner-card" src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//${backdrop_path}`} alt="First slide"/>
                    <div className="carousel-caption d-none d-md-block banner-intro">
                        <h2 className="card-title banner-title">{movie.title}</h2>
                        <p className="card-text banner-text">{movie.overview}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 banner-card" src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//${backdrop_path1}`} alt="Second slide"/>
                    <div className="carousel-caption d-none d-md-block banner-intro">
                        <h2 className="card-title banner-title">{movie1.title}</h2>
                        <p className="card-text banner-text">{movie1.overview}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 banner-card" src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces//${backdrop_path2}`} alt="Third slide"/>
                    <div className="carousel-caption d-none d-md-block banner-intro">
                        <h2 className="card-title banner-title">{movie2.title}</h2>
                        <p className="card-text banner-text">{movie2.overview}</p>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div >

        )
    }
}

export default Banner;