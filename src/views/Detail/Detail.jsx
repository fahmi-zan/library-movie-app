import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import Navbar from "../../components/Navbar/navbar";
import Carddetail from "./ListDetail";
import '../../style/style.css';
import { FaAngleDoubleLeft } from "react-icons/fa";
import axios from "axios"



export default function Detail() {

    const [film, setFilm] = useState([])
    const [genre, setGenre] = useState('')
    let params = useParams();
    let navigate = useNavigate()
    // console.log(genre);
    useEffect(() => {
        function fetchdDetail() {
            axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6ae96dd48df34a9ca01dd4985f0f4706&language=en-US`)
                .then((data) => {
                    // handle success
                    // console.log(data.data.genres);
                    setFilm(data.data)
                    setGenre(data.data.genres.map(el => el.name).join(', '))

                })
                .catch((err) => {
                    // handle error
                    console.log(err);
                });
        }

        fetchdDetail()
    }, [params]);


    return (<>
        <Navbar />
        <Container fluid>
            <div>
                <button class="btn btn-dark mt-3" onClick={() => {
                    navigate('/')
                }}><FaAngleDoubleLeft /> Back</button>
            </div>
            <Row className='detail'>

                <Carddetail title={film.title} img={film.poster_path} ratings={film.vote_average} tagline={film.tagline} gt={genre} dt={film.release_date} lang={film.original_language} st={film.status} voteCount={film.vote_count} view={film.overview} />

            </Row>
        </Container>
    </>);
}
