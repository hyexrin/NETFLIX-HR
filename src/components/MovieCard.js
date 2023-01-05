import React, { useEffect } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { movieActions } from '../redux/actions/movieActions';
import Loading from './Loading';

const MovieCard = ({ item }) => {
    const navigate = useNavigate('');
    const { movieGenres, loading } = useSelector(state => state.movie);

    return loading ? <Loading />
    : (
        <div
            className='movie-card'
            style={{
                backgroundImage: "url(" +
                    `https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}` + ")",
            }}
            onClick={() => navigate(`/movies/${item.id}`)}
        >
                 <Container className='movie-card-overlay'>
                 <Row><h1>{
                 item.title.length > 50
                 ? item.title.substr(0, 50) + ' ...'
                 : item.title
                 }</h1></Row>
                 <Row className='movie-card-badges'>
                     {item.genre_ids.map(id => (
                         <Badge bg="danger" key={id}>
                             {movieGenres.genres.find(item => item.id === id).name}
                         </Badge>
                     ))}
                 </Row>
                 <Row>
                     <Col><span className='voteAvarage-span'>{item.vote_average}</span></Col>
                     <Col>{item.adult ? <span className='adult'>19</span> : <span className='all'>G</span>}</Col>
                 </Row>
             </Container>

        </div>
    )
}

export default MovieCard