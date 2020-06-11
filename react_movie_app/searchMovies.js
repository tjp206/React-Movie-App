import React from "react";

export default function searchMovies() {

    return (
        <form class="form"></form>
        <label htmlFor="query" class="label">Movie Name</label>
        <input type="text" name="query" placeholder="text">Enter movie name</input>
        <button class="button" type="submit">Submit</button>
    )
}