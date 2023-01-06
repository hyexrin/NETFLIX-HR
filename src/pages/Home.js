import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../redux/actions/movieActions';
import { movieDetailActions } from '../redux/actions/movieDetailActions';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import MovieSlide from '../components/MovieSlide';
import HomeBanner from '../components/HomeBanner';

const Home = () => {
    const dispatch = useDispatch();
    const { popularMoviesData, topRatedMoviesData, upcomingMoviesData, loading } = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getMovies());
    }, []);

    console.log(upcomingMoviesData);
    
    return loading ? (
        <Loading />
      ) : (
        <div className='home'>
            <div className='home-banner'>
                <HomeBanner movie={popularMoviesData.results[0]} />

                <h2>
                    <span style={{ marginBottom: '100px' }}>POPULAR MOVIES</span>
                    <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
                </h2>
                <MovieSlide movies={popularMoviesData} />
                <h2>
                    <span>TOP RATED MOVIES</span>
                    <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
                </h2>
                <MovieSlide movies={topRatedMoviesData} />
                <h2 style={{ position: 'relative', zIndex: '1' }}>
                    <span>UPCOMING MOVIES</span>
                    <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
                </h2>
                <MovieSlide movies={upcomingMoviesData} />
            </div>
        </div>


    )
}

export default Home