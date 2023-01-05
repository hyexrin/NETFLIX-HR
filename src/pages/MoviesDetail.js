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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import ReviewCard from '../components/ReviewCard';
import MovieSlide from '../components/MovieSlide';


const MoviesDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const movie_id = useParams().id;

  const { movieDetailDatas, movieVideosDatas, recommendMoviesDatas, movieReviewsDatas, creditDatas, loading } = useSelector(state => state.movieDetail)

  useEffect(() => {
    dispatch(movieDetailActions.getMovieDetail(movie_id, 1));
    dispatch(movieActions.getMovies());

    return () => {
      dispatch({
        type: "RESET_MOVIE_KEY_SUCCESS",
      });
      dispatch({ type: "RESET_MOVIE_DETAIL_STORE_SUCCESS" });
    };
  }, [movie_id]);

  console.log(recommendMoviesDatas.data);

  return loading ? (
    <Loading />
  ) : (
    <div className='movies-detail'>
      <div className='detail-banner'>
        <Banner movie={movieDetailDatas} video={movieVideosDatas} />
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
          <div className='detail-card' style={{ wordSpacing: '10px' }}>
            <div>
              <h4>RELEASE DATE | {movieDetailDatas.release_date}</h4>
              <h4>RUNTIME | {movieDetailDatas.runtime}min</h4>
              <h4>GENRES | {' '}
                {movieDetailDatas !== null
                  ? (movieDetailDatas.genres.map(item => (
                    <Badge bg="danger" key={item.id} style={{ wordSpacing: '2px' }}>
                      {item.name}
                    </Badge>
                  )))
                  : null}

              </h4>
              <h4>POPULARITY | {movieDetailDatas.popularity}</h4>
              <h4>VOTE AVERAGE | <span className='voteAvarage-span'>{movieDetailDatas.vote_average}</span> VOTE COUNT | <span className='voteCount-span'>{movieDetailDatas.vote_count}</span></h4>
              <h4>RATED | {movieDetailDatas.adult ? <span className='adult'>19</span> : <span className='all'>G</span>}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='detail-characters'>
        <h1 className='detail-title'>
          <span>CAST OF CAHRACTERS</span>
          <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
        </h1>

        <div className='character-card-box'>
          <Swiper
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            slidesPerView={8}
            spaceBetween={6}
            slidesPerGroup={2}
            speed={800}
            loop={true}
            loopFillGroupWithBlank={false}
            navigation={true}
            modules={[Navigation, Lazy]}
            lazy={true}
            breakpoints={{
              0: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
              450: {
                slidesPerView: 4,
                slidesPerGroup: 2,
              },
              920: {
                slidesPerView: 6,
                slidesPerGroup: 2,
              },
            }}
          >
            {creditDatas.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id}>
                <CharacterCard cast={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {recommendMoviesDatas.data.total_results !== 0
      ? (
      <div className='detail-video'>
        <h1 className='detail-title'>
          <span>RECOMMENDED MOVIES</span>
          <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
        </h1>

        <div className='video-card-box'>
          <MovieSlide movies={recommendMoviesDatas.data} />
        </div>
      </div>)
      : ''
    }



      {movieReviewsDatas.total_results !== 0
        ? (movieReviewsDatas.results.map(item => (
          <div className='detail-review'>
            <h1 className='detail-title'>
              <span>REVIEWS {'('}{movieReviewsDatas.total_results}{')'}</span>
              <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
            </h1>

            <div className='review-card-box'>
              <div className='review-card-box'>
                <ReviewCard data={item} key={item.id} />
              </div>
            </div>
          </div>
        )))
        : ''}


    </div>
  )
}

export default MoviesDetail