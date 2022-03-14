import React, { useState, useEffect } from 'react';
import { Col, Table } from 'react-bootstrap';

export default function ListDetail(props) {
    const [title, setTitle] = useState('');
    const [rate, setRate] = useState('')
    const [poster, setPoster] = useState('https://image.tmdb.org/t/p/w500')
    const [tag, setTag] = useState('')
    const [genre, setGenre] = useState('')
    const [date, setDate] = useState('')
    const [leng, setLeng] = useState('')
    const [status, setStatus] = useState('')
    const [vote, setVote] = useState('')
    const [sinop, setSinop] = useState('')



    useEffect(() => {
        setTitle(props.title)
        setPoster(props.img)
        setRate(props.ratings)
        setTag(props.tagline)
        setGenre(props.gt)
        setDate(props.dt)
        setLeng(props.lang)
        setStatus(props.st)
        setVote(props.voteCount)
        setSinop(props.view)
        // console.log(props.gt);
    }, [props]);


    return (<>
        <Col sm>
            <div className="img-box">
                <img className='shadow-lg' src={`https://image.tmdb.org/t/p/w500${poster}`} width="70%" alt="img-film" />
            </div>
        </Col>
        <Col>
            <div className="rightside">
                <div className="title-head">
                    <h1 className='text-md fs-2'>{title}</h1>
                </div>
                <div>
                    <Table striped size='sm'>
                        <thead>
                            <tr><th>Tagline: <span className='fw-normal'>{tag}</span></th></tr>
                            <tr><th>Genres: <span className='fw-normal'>{genre}</span></th></tr>
                            <tr><th>Country: <span className='fw-normal'>{leng}</span></th></tr>
                            <tr><th>Date release: <span className='fw-normal'>{date}</span></th></tr>
                            <tr><th>Status Public: <span className='fw-normal'>{status}</span></th></tr>
                            <tr><th>Ratings: <span className='fst-italic fw-normal'>{rate}/10 ~ {vote}vote</span></th></tr>
                        </thead>
                    </Table>
                    <div className="overvier">
                        <p> {sinop} </p>
                    </div>
                </div>
            </div>
        </Col>
    </>);
}
