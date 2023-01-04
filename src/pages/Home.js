import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../redux/actions/movieActions';
import { movieDetailActions } from '../redux/actions/movieDetailActions';
import Loading from '../components/Loading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
    const dispatch = useDispatch();
    const { popularMoviesData, topRatedMoviesData, upcomingMoviesData, loading } = useSelector(state => state.movie);

    useEffect(() => {
        dispatch(movieActions.getMovies());
    }, []);

    if (loading) {
        return <Loading />
    }
    return (
        <div className='home'>
            <div className='home-banner'>
                <Banner movie={popularMoviesData.results[0]}/>
            </div>
                <h1>
                    <span style={{marginBottom: '100px'}}>POPULAR MOVIES</span>
                    <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
                </h1>
                <MovieSlide movies={popularMoviesData} />
                <h1>
                    <span>TOP RATED MOVIES</span>
                    <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
                </h1>
                <MovieSlide movies={topRatedMoviesData} />
                <h1 style={{position: 'relative', zIndex: '1'}}>
                    <span>UPCOMING MOVIES</span>
                    <span className="title-sign"><FontAwesomeIcon icon={faChevronRight} /></span>
                </h1>
                <MovieSlide movies={upcomingMoviesData} />
        </div>


    )
}

export default Home