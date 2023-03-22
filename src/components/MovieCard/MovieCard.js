import React, { useState, useEffect } from 'react';
import "./MovieCard.css"

const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = 'db81fd816a0a48776fd8b9ce320c6d10'
    const year = 2022
    const sorted = 'popularity.desc'
    const limit = 50
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language="en-US"&sort_by=${sorted}&primary_release_year=${year}&page=1&vote_count.gte=1000&vote_average.gte=7&with_original_language=en&with_watch_providers=8&limit=${limit}`
            );
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);
    return (
        <div className='card-movie'>
            <h1 className='card-title'>Top 10 Movies in 2021</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img className='card-image' src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <h2 className='title-movie'>{movie.title}</h2>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default MovieCard;