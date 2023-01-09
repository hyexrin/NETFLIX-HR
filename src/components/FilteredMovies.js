import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from "react-js-pagination";
import { movieFilterActions } from '../redux/actions/movieFilterActions';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const FilteredMovies = () => {

	const navigate = useNavigate('');
	const dispatch = useDispatch();
	const { filteredMoviesDatas, loading } = useSelector(state => state.movieFilter);

	const [pageNum, setPage] = useState(1);

	const handlePageChange = (page) => {
		setPage(page);
	};

	useEffect(() => {
		dispatch({
			type: "STORE_PAGENUM_SUCCESS",
			payload: pageNum,
		})
	}, [pageNum]);

  return loading ? (
    <Loading />
  ) : (
		<Container>

			<Row>
				{filteredMoviesDatas &&
					filteredMoviesDatas.data.results.map((item) => (
						item.poster_path 
						? (
						<Col
							key={item.id}
							className='filtered-movies-card'
							lg={2} md={3} sm={6}
							style={{
								backgroundImage: 'url(' +
									`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}` + ')',
							}}
							onClick={() => navigate(`/movies/${item.id}`)}>
						</Col>) 
						: (
							<Col
								key={item.id}
								className='filtered-movies-card-noPoster'
								lg={2} md={3} sm={4}
								>
									<p>There are no posters available.</p>
							</Col>)
					))}
			</Row>

			<Pagination
				activePage={pageNum}
				itemsCountPerPage={20}
				totalItemsCount={
					filteredMoviesDatas.data.total_results < 1000 ?
					filteredMoviesDatas.data.total_results : 3000
				}
				pageRangeDisplayed={5}
				prevPageText={"‹"}
				nextPageText={"›"}
				onChange={handlePageChange}
			/>
		</Container>
	)
}

export default FilteredMovies