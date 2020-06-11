import React, {useState} from "react";

export default function searchMovies() {

    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?
        api_key=1992c9b2518f3827c22ca49e132ad339&language=en-US&query=${query}&page=1&
        include_adult=false`;

    try{
        const res = await fetch(url);
        const date = await res.json();
        console.log(data.results);
        setMovies(data.results);
    }catch(err){
        console.error(err);
    }
}

    return (
        <form class="form" onSubmit={searchMovies}>
            <label htmlFor="query" class="label">Movie Name</label>
            <input type="text" name="query"
             placeholder="i.e Jurassic Park"
             value={query} onChange={(e) => setQuery(e.target.value)}
            />
            <button class="button" type="submit">Search</button>
        </form>
       
    )
}