import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FilteredMovies from '../components/FilteredMovies'
import Loading from '../components/Loading'
import MoviesFilter from '../components/MoviesFilter'
import MoviesGenreFilter from '../components/MoviesGenreFilter'
import MoviesSlideFilter from '../components/MoviesSlideFilter'
import { movieFilterActions } from '../redux/actions/movieFilterActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Movies = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

	const isMounted = useRef(false);
	const { 
		keyword,
		releaseDateGte,
		releaseDateLte,
		withGenres,
		sortBy,
		pageNum,
    loading,
    genresDatas
	 } = useSelector(state => state.movieFilter);

  useEffect(() => {
		if (isMounted.current) {
			dispatch(movieFilterActions.getFilterMovies(
				keyword,
				releaseDateGte,
				releaseDateLte,
				withGenres,
				sortBy,
				pageNum));
		} else {
			isMounted.current = true;
		}
	}, [keyword, sortBy, pageNum, releaseDateGte, releaseDateLte, withGenres]);
  
  useEffect(() => {
    dispatch(movieFilterActions.getFilterMovies());
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className='movies-wrap'>
      <div className={show ? 'filter-btn-show' : 'filter-btn'} onClick={() => {setShow(!show); console.log(show)}}>
        <FontAwesomeIcon icon={faPlus} className='filter-icon'/>
      </div>
      <div className={show? 'movies-filter' : 'movies-filter-hidden'}>
        <MoviesFilter />
        <MoviesSlideFilter title={'YEAR'}/>
        <MoviesGenreFilter genres={genresDatas}/>
        
      </div>

      <div className='movies-list'>
        <FilteredMovies/>
      </div>
    </div>
  )
}

export default Movies