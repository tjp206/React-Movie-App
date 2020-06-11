import React from "react";

export default function searchMovies() {

    return (
        <form class="form">
            <label htmlFor="query" class="label">Movie Name</label>
            <input type="text" name="query" placeholder="i.e Jurassic Park"/>
            <button class="button" type="submit">Search</button>
        </form>
       
    )
}