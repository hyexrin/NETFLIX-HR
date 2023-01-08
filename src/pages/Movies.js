import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilteredMovies from '../components/FilteredMovies'
import Loading from '../components/Loading'
import MoviesFilter from '../components/MoviesFilter'
import MoviesGenreFilter from '../components/MoviesGenreFilter'
import MoviesSlideFilter from '../components/MoviesSlideFilter'
import { movieFilterActions } from '../redux/actions/movieFilterActions'

const Movies = () => {
  const dispatch = useDispatch();
  const {genresDatas, loading} = useSelector(state => state.movieFilter);
  
  useEffect(() => {
    dispatch(movieFilterActions.getFilterMovies());
    // dispatch(movieFilterActions.getMoreMovies());
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className='movies-wrap'>
      <div className='movies-filter'>
        <MoviesFilter />
        <MoviesSlideFilter />
        <MoviesSlideFilter />
        <MoviesGenreFilter genres={genresDatas}/>
      </div>

      <div className='movies-list'>
        <FilteredMovies/>

      </div>
    </div>
  )
}

export default Movies