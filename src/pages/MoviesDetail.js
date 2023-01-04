import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { movieActions } from '../redux/actions/movieActions';
import { movieDetailActions } from '../redux/actions/movieDetailActions';
import Banner from '../components/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilm } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import CharacterCard from '../components/CharacterCard';

const MoviesDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const movie_id = useParams().id;

  const { movieGenres, loading } = useSelector(state => state.movie);
  const {movieDetailDatas, movieVideosDatas, movieReviewsDatas} = useSelector(state => state.movieDetail)

  useEffect(() => {
    dispatch(movieDetailActions.getMovieDetail(movie_id, 1));
    dispatch(movieActions.getMovies());
  }, [movie_id]);

  console.log(movieDetailDatas.genres);
  console.log(movieGenres.genres)
  if (loading) {
    return <Loading />
  }
  return (
    <div className='movies-detail'>
      <div className='detail-banner'>
        <Banner movie={movieDetailDatas} />
      </div>

      <div className='detail-info'>
        <h1 className='detail-title'>
          <span>INFO</span>
          <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
        </h1>

        <div className='detail-card-box'>
          <div className='detail-card'>
            <h3><FontAwesomeIcon icon={faFilm} /></h3>
            <h4>{movieDetailDatas.overview}</h4>
          </div>
          <div className='detail-card' style={{wordSpacing: '10px'}}>
            <div>
              <h4>RELEASE DATE | {movieDetailDatas.release_date}</h4>
              <h4>RUNTIME | {movieDetailDatas.runtime}min</h4>
              <h4>GENRES | {' '}
              { movieDetailDatas &&
              movieDetailDatas.genres.map(item => (
                <Badge bg="danger" key={item.id} style={{wordSpacing: '2px'}}>
                  {item.name}
                </Badge> 
              ))}

                </h4>
              <h4>POPULARITY | {movieDetailDatas.popularity}</h4>
              <h4>VOTE AVERAGE | <span className='voteAvarage-span'>{movieDetailDatas.vote_average}</span> VOTE COUNT | <span className='voteCount-span'>{movieDetailDatas.vote_count}</span></h4>
              <h4>RATED | {movieDetailDatas.adult? <span className='adult'>19</span> : <span className='all'>G</span>}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='detila-characters'>
          <h1 className='detail-title'>
            <span>CAST OF CAHRACTERS</span>
            <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
          </h1>

          <div className='character-card-box'>
            <CharacterCard />
          </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default MoviesDetail