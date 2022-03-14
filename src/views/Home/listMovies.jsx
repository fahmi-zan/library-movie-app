import React, { useState, useEffect } from 'react';
import { Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export default function ListMovies(props) {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [rate, setRate] = useState('')
    const [poster, setPoster] = useState('https://image.tmdb.org/t/p/w500')

    let navigate = useNavigate()

    useEffect(() => {
        setId(props.id)
        setTitle(props.title)
        setPoster(props.img)
        setRate(props.ratings)
    }, [props]);


    return (<>
        <Card className='shadow p-1 bg-body rounded text-white' style={{ width: '14rem', margin: '1rem 0rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster}`} />
            <Card.ImgOverlay>
                <Card.Subtitle className='mb-1 fw-bold'><FaStar style={{ color: 'yellow' }} />{rate}</Card.Subtitle>
                {/* <Card.Body style={{ color: 'white', border: 'none' }}> */}
                <Card.Title className='fw-bold text-sm-center' >{title}</Card.Title>
                {/* </Card.Body> */}
                <Button className='stretched-link opacity-0' onClick={() => {
                    navigate(`/detail/${id}`)
                }}></Button>
            </Card.ImgOverlay>
        </Card></>
    );
}
