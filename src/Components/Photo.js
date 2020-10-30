/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Unsplash, {toJson} from "unsplash-js";
import "./Photo.css"

const unsplash = new Unsplash({
    accessKey : "sSqmdXeYEAtxctHWMLUxSMZD7JR7_wJNSN2NSMSJTN0",
});

function Photo () {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

async function searchPhoto (e){
    e.preventDefault();
    unsplash.search
     .photos(query, 2, 10)
     .then(toJson)
     .then((res) => {
         setPics(res.results);
     });
}

    return (
        <div>
            <form>
                <input type="text" onChange={(e) => setQuery(e.target.value)} name="query" placeholder="Type apple or dog..." className="user-input"/>
                <button type="submit" className="button" onClick={searchPhoto}>Search</button>
                <br></br>
            </form>
            <div className="card-list">
                {pics.map((pic) =>
                <div key={pic.id} className="card">
                    <img src={pic.urls.regular} className="card-image" alt={pic.alt_description} width="50%" height="50%"></img>
                </div>
                )}
            </div>
        </div>
    )
}

export default Photo