import React from "react";

export default function searchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const query = "jurassic Park";

        const url = `https://api.themoviedb.org/3/search/movie?
        api_key=1992c9b2518f3827c22ca49e132ad339&language=en-US&query=${query}&page=1&
        include_adult=false`;

    try{
        const res = await fetch(url);
        const date = await res.json();
        console.log(data);
    }catch(err){
        console.error(err);
    }
}

    return (
        <form class="form" onSubmit={searchMovies}>
            <label htmlFor="query" class="label">Movie Name</label>
            <input type="text" name="query" placeholder="i.e Jurassic Park"/>
            <button class="button" type="submit">Search</button>
        </form>
       
    )
}