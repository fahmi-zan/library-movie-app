import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar/navbar";
import Movies from "./listMovies";
import axios from "axios"

export default function Home() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchmovie()
    }, []);


    function fetchmovie() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6ae96dd48df34a9ca01dd4985f0f4706&language=en-US&page=1')
            .then((data) => {
                // handle success
                // console.log(data.data['results']);
                setMovie(data.data['results'])

            })
            .catch((err) => {
                // handle error
                console.log(err);
            });
    }
    return <>
        <Navbar />
        <div className='continer mt-lg-3 p-md-2'>
            <h1 className='text-lg-start fs-2 text-black-50 fw-bolder'>Now Playing</h1>
        </div>
        <section className='section d-flex justify-content-lg-evenly'>
            {movie.map((elemen, i) => (
                <Movies id={elemen.id} title={elemen.title} img={elemen.poster_path} ratings={elemen.vote_average} key={i} />
            ))}
        </section>
    </>;
}
