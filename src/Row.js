import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";
const base_url ="https://en.wikipedia.org/wiki/"

function Row({ title, fetchUrl, fetchURL }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchDate() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.top)
            return request;
        }
        fetchDate();

    }, [fetchUrl]);

    console.log(movies);
    return (
        <div className="anime">
             <h1>{title}</h1> 
        <div className="animes">
                {movies.map(movie => (
                    <div className="card">
                        <img key={movie.id} className="card-image" src={`${movie.image_url}`} alt={movie.title} />
                        <div className="card--content">
                            <div class="card--content--title">
                                {movie.title}
                            </div>
                            <a href={`${base_url}${movie.title}`}>
                            <button className="Details">Details</button></a>
                            <div class="card--content--footer">
                                <div>{movie.type}</div>
                                <div>{movie.start_date}</div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    )
}

export default Row

