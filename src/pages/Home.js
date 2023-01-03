import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../redux/actions/movieActions';
import { movieDetailActions } from '../redux/actions/movieDetailActions';
import Loading from './components/Loading';

const Home = () => {
    const dispatch = useDispatch();
    const {popularMoviesData, topRatedMoviesData, upcomingMoviesData, loading} = useSelector(state => state.movie);
    // const {movieDetailDatas} = useSelector(state => state.movieDetail);

    useEffect(() => {
        dispatch(movieActions.getMovies());
        // dispatch(movieDetailActions.getMovieDetail(movie_id, 1));
    }, []);

    // console.log(movieDetailDatas)
 
    if(loading) {
        return <Loading />
    }
  return (
    <div>Home</div>
  )
}

export default Home